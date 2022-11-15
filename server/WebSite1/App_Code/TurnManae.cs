

using System.Collections.Generic;

using MyApp.Contract;
namespace MyApp.Service
{
    public class TurnManage
    {


        public List<TurnList> GetClient()
        {

            return MyApp.Call.Call.Instance.GetTurnList();


        }
        public List<TurnList> AddClient(AddClient form)
        {

            return MyApp.Call.Call.Instance.AddTurnList(form);


        }
        public List<TurnList> MoveClient(AddClient form)
        {

            return MyApp.Call.Call.Instance.MoveTurnList();


        }

    }
  
}