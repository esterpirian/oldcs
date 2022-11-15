using MyApp.Contract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

// NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService" in both code and config file together.

namespace MyApp.Interfaces
{
    [ServiceContract]
    public interface IService
    {
        [OperationContract]
        List<TurnList> GetClient();

        [OperationContract]
        List<TurnList> AddClient(AddClient form);

        [OperationContract]
        List<TurnList> MoveClient();

    }
}
namespace MyApp.Contract
{
    public class TurnList
    {
        public int Id { get; set; }
        public string ClientName { get; set; }
        public int Status { get; set; }
        public DateTime DateAdd { get; set; }
    }
    public class AddClient
    {

        public string ClientName { get; set; }

    }
}

