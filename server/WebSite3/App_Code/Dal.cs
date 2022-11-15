using System;
using System.Collections.Generic;

using MyApp.Contract;

using System.Configuration;


/// <summary>
/// Summary description for Dal
/// </summary>
namespace MyApp.Data {
    public class Dal
    {
        static  public List<TurnList> GetTurnList()
        {
            List<TurnList> turn = new List<TurnList>();
            using (var connection = new System.Data.SqlClient.SqlConnection(ConfigurationManager.AppSettings["TurnConnection"]))
            {
               
                using (var command = connection.CreateCommand( ))
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.CommandText = "GetTurn";
                    command.Parameters.AddWithValue("@status", 2);
                
                    try
                    {
                        connection.Open();
                       using (var reader = command.ExecuteReader())
                        {
                            while (reader.Read())
                            {
                                turn.Add(new TurnList
                                {
                                    Id = (int)reader["Id"],
                                    ClientName = reader["ClientName"].ToString(),
                                    Status = (int)reader["Status"],
                                 
                                    DateAdd = (DateTime)reader["DateAdd"]
                                });
                            }
                        }
                    }
                    catch (Exception ex)
                    {
                      
                    }
                    finally
                    {
                        connection.Close();
                    }
                }
                
            }
            return turn;
        }
        static public bool AddTurnList(string name)
        {
            List<TurnList> turn = new List<TurnList>();
            using (var connection = new System.Data.SqlClient.SqlConnection(ConfigurationManager.AppSettings["TurnConnection"]))
            {

                using (var command = connection.CreateCommand())
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.CommandText = "AddClient";
                    command.Parameters.AddWithValue("@name", name);

                    try
                    {
                        connection.Open();
                        command.ExecuteNonQuery();
                        return true;
                       
                    }
                    catch (Exception ex)
                    {
                        return false;
                    }
                    finally
                    {
                        connection.Close();
                    }
                }

            }
            //return false; ;
        }
        static public bool MoveTurnList()
        {
            List<TurnList> turn = new List<TurnList>();
            using (var connection = new System.Data.SqlClient.SqlConnection(ConfigurationManager.AppSettings["TurnConnection"]))
            {

                using (var command = connection.CreateCommand())
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;
                    command.CommandText = "MoveTurn";
                   

                    try
                    {
                        connection.Open();
                        command.ExecuteNonQuery();
                        return true;

                    }
                    catch (Exception ex)
                    {
                        return false;
                    }
                    finally
                    {
                        connection.Close();
                    }
                }

            }
            //return false; ;
        }
    }
    }