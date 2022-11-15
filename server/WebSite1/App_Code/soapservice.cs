using System;
using System.Collections.Generic;
using System.ServiceModel;
using MyApp.Contract;
using MyApp.Interfaces;
using System.Configuration;


/// <summary>
/// Summary description for Dal
/// </summary>
namespace MyApp.Call {



    public class Call
    {

        private static Call _instance = null;
        public static Call Instance
        {
            get
            {
                if (_instance == null)
                {
                    lock (typeof(Call))
                    {
                        if (_instance == null)
                        {
                            _instance = new Call();
                        }
                    }
                }
                return _instance;
            }
        }

        private Call() { }

        class ClientFactory<T> : ClientBase<T> where T : class
        {
            public ClientFactory() { }

            public T GetChannel
            {
                get { return base.Channel; }
            }
        }


         public List<TurnList> GetTurnList()
        {
            using (var factory = new ClientFactory<IService>())
            {
                try
                {
                    return factory.GetChannel.GetClient();
                }
                catch (Exception ex)
                {
                   
                    return null;
                }
            }
            //List<TurnList> turn = new List<TurnList>();
            //using (var connection = new System.Data.SqlClient.SqlConnection(ConfigurationManager.AppSettings["TurnConnection"]))
            //{

            //    using (var command = connection.CreateCommand( ))
            //    {
            //        command.CommandType = System.Data.CommandType.StoredProcedure;
            //        command.CommandText = "GetTurn";
            //        command.Parameters.AddWithValue("@status", 2);

            //        try
            //        {
            //            connection.Open();
            //           using (var reader = command.ExecuteReader())
            //            {
            //                while (reader.Read())
            //                {
            //                    turn.Add(new TurnList
            //                    {
            //                        Id = (int)reader["Id"],
            //                        ClientName = reader["ClientName"].ToString(),
            //                        Status = (int)reader["Status"],

            //                        DateAdd = (DateTime)reader["DateAdd"]
            //                    });
            //                }
            //            }
            //        }
            //        catch (Exception ex)
            //        {

            //        }
            //        finally
            //        {
            //            connection.Close();
            //        }
            //    }

            //}
            //return turn;
        }
         public List<TurnList> AddTurnList(AddClient name)
        {
            using (var factory = new ClientFactory<IService>())
            {
                try
                {
                    return factory.GetChannel.AddClient(name);
                }
                catch (Exception ex)
                {

                    return null;
                }
            }
        }
         public List<TurnList> MoveTurnList()
        {
            using (var factory = new ClientFactory<IService>())
            {
                try
                {
                    return factory.GetChannel.MoveClient();
                }
                catch (Exception ex)
                {

                    return null;
                }
            }
        }
        //    List<TurnList> turn = new List<TurnList>();
        //    using (var connection = new System.Data.SqlClient.SqlConnection(ConfigurationManager.AppSettings["TurnConnection"]))
        //    {

        //        using (var command = connection.CreateCommand())
        //        {
        //            command.CommandType = System.Data.CommandType.StoredProcedure;
        //            command.CommandText = "AddClient";
        //            command.Parameters.AddWithValue("@name", name);

        //            try
        //            {
        //                connection.Open();
        //                command.ExecuteNonQuery();
        //                return true;

        //            }
        //            catch (Exception ex)
        //            {
        //                return false;
        //            }
        //            finally
        //            {
        //                connection.Close();
        //            }
        //        }

        //    }
        //    //return false; ;
        //}
    }
    }