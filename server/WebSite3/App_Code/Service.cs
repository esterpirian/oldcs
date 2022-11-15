using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using MyApp.Data;
using MyApp.Contract;
using MyApp.Interfaces;

// NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service" in code, svc and config file together.
namespace MyApp.Service
{
    public class Service : IService
    {
        public List<TurnList> GetClient()
        {

            return Dal.GetTurnList();


        }
        public List<TurnList> AddClient(AddClient form)
        {
            if (form.ClientName != "" && Dal.AddTurnList(form.ClientName) == true)
            {
                return Dal.GetTurnList();
            }
            return null;



        }
        public List<TurnList> MoveClient()
        {
            if (Dal.MoveTurnList() == true)
            {
                return Dal.GetTurnList();
            }
            return null;



        }
    }
}
