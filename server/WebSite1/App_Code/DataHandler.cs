using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.IO;
using System.Web.Script.Serialization;
using System.Web.SessionState;


namespace MyApp.Ajax
{
    public class DataHandler : IHttpHandler, IRequiresSessionState
    {
        #region IHttpHandler Members

        public bool IsReusable
        {
            get { return true; }
        }

        public void ProcessRequest(HttpContext context)
        {
            try
            {
               var serviceType = Type.GetType(Path.GetFileNameWithoutExtension(context.Request.PhysicalPath), false, true);
                if (serviceType != null)
                {
                   
                        var service = Activator.CreateInstance(serviceType); 
                    if (service != null)
                    {
                        string file = Path.GetFileName(context.Request.PhysicalPath);
                        int methodIndex = 0;
                        while (!context.Request.Url.Segments[methodIndex].StartsWith(file))
                        {
                            methodIndex++;
                        }
                        methodIndex++;
                        var method = service.GetType().GetMethods().FirstOrDefault(m => m.Name.ToLower() == context.Request.Url.Segments[methodIndex].TrimEnd('/').ToLower());
                        if (method != null)
                        {

                            methodIndex++;
                            var parameter = method.GetParameters();
                            object[] parameterArray = null;
                            var javaScriptSerializer = new JavaScriptSerializer() { MaxJsonLength = int.MaxValue };
                            
                            if (parameter != null)
                            {

                                parameterArray = new object[parameter.Length];
                                for (int i = 0; i < parameterArray.Length; i++)
                                {
                                    if (parameter[i].Name == "form")
                                    {
                                        using (var reader = new StreamReader(context.Request.InputStream))
                                        {
                                            if (parameter[i].ParameterType == typeof(string))
                                            {
                                                parameterArray[i] = reader.ReadToEnd();
                                            }
                                            else
                                            {
                                                parameterArray[i] = Newtonsoft.Json.JsonConvert.DeserializeObject(reader.ReadToEnd(), parameter[i].ParameterType);
                                                

                                            }
                                        }
                                    }
                                    
                                   
                                   
                                }
                            }
                            
                          var returnValue = method.Invoke(service, parameterArray);
                            context.Response.Expires = -1;
                            context.Response.AddHeader("pragma", "no-cache");
                            context.Response.AddHeader("cache-control", "no-store");
                           
                            switch (context.Request.CurrentExecutionFilePathExtension.ToLower())
                            {
                                case ".jsonp":
                                    {

                                        var stringDSata = Newtonsoft.Json.JsonConvert.SerializeObject(returnValue);
                                        
                                        context.Response.ContentType = "application/json";
                                        context.Response.Write(stringDSata);
                                        break;
                                    }
                             

                            }

                        }
                        else
                        {
                            context.Response.StatusCode = 401;
                            context.Response.Clear();
                        }

                    }
                }
            }
            catch (Exception ex)
            {
               
                context.Response.StatusCode = 500;
                context.Response.Clear();
                
            }
        }

        #endregion
    }
}