import React, { useState, useEffect } from "react";
// import library in your component file
import MetaApi from "metaapi.cloud-sdk";

const accountId = "0a9072b7-d102-4924-9779-d747072020d8";
const token =
  "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI0MjM3MWQ5NTYxYjRlMmYwZWRjYzM0OWI0ZmYxYTAyNSIsInBlcm1pc3Npb25zIjpbXSwiYWNjZXNzUnVsZXMiOlt7ImlkIjoidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpIiwibWV0aG9kcyI6WyJ0cmFkaW5nLWFjY291bnQtbWFuYWdlbWVudC1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6MGE5MDcyYjctZDEwMi00OTI0LTk3NzktZDc0NzA3MjAyMGQ4Il19LHsiaWQiOiJtZXRhYXBpLXJlc3QtYXBpIiwibWV0aG9kcyI6WyJtZXRhYXBpLWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDowYTkwNzJiNy1kMTAyLTQ5MjQtOTc3OS1kNzQ3MDcyMDIwZDgiXX0seyJpZCI6Im1ldGFhcGktcnBjLWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6d3M6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjBhOTA3MmI3LWQxMDItNDkyNC05Nzc5LWQ3NDcwNzIwMjBkOCJdfSx7ImlkIjoibWV0YWFwaS1yZWFsLXRpbWUtc3RyZWFtaW5nLWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6d3M6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbImFjY291bnQ6JFVTRVJfSUQkOjBhOTA3MmI3LWQxMDItNDkyNC05Nzc5LWQ3NDcwNzIwMjBkOCJdfSx7ImlkIjoibWV0YXN0YXRzLWFwaSIsIm1ldGhvZHMiOlsibWV0YXN0YXRzLWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIl0sInJlc291cmNlcyI6WyJhY2NvdW50OiRVU0VSX0lEJDowYTkwNzJiNy1kMTAyLTQ5MjQtOTc3OS1kNzQ3MDcyMDIwZDgiXX0seyJpZCI6InJpc2stbWFuYWdlbWVudC1hcGkiLCJtZXRob2RzIjpbInJpc2stbWFuYWdlbWVudC1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciJdLCJyZXNvdXJjZXMiOlsiYWNjb3VudDokVVNFUl9JRCQ6MGE5MDcyYjctZDEwMi00OTI0LTk3NzktZDc0NzA3MjAyMGQ4Il19LHsiaWQiOiJjb3B5ZmFjdG9yeS1hcGkiLCJtZXRob2RzIjpbImNvcHlmYWN0b3J5LWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDowYTkwNzJiNy1kMTAyLTQ5MjQtOTc3OS1kNzQ3MDcyMDIwZDgiXX0seyJpZCI6Im10LW1hbmFnZXItYXBpIiwibWV0aG9kcyI6WyJtdC1tYW5hZ2VyLWFwaTpyZXN0OmRlYWxpbmc6KjoqIiwibXQtbWFuYWdlci1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6MGE5MDcyYjctZDEwMi00OTI0LTk3NzktZDc0NzA3MjAyMGQ4Il19XSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjQyMzcxZDk1NjFiNGUyZjBlZGNjMzQ5YjRmZjFhMDI1IiwiaWF0IjoxNjk3NjA3NDg2LCJleHAiOjE3MDUzODM0ODZ9.nvUukAfj06XlDuUOeiw5pGAaj_QPiG4dZ-1fkMsL7fiqLYq90-SP1JHE03Oi0XWb2wAFHiDtL4UdUCEWPi4ZXburMCbQ2r_tYdDQpCmp27hDIWiwa31ITZQYM75SQL0Q2zM8P-jIiEhk_jwzrf0NCHMHNAsRO6QBVnQ16An_YG4XpraUaSZdR_4GiQeuVpIuZAzZmiCjYX7sjCMPAGchKwsI612TUG6n4d9ceQgXsTBEFYobkXVJporORDQNCdk_IV_uM7BgQc6junu2B-2PdSekyBfrvKI34BOqQZW1EConC2BPpLM3uWTIIi7SOLRcuEnoBC8M3c0HU5S7-rBUSYd5_VNtAMUTAT7teVaj2oPwtjoNWJlspQ9ju22GqQSuziCtVnMtM07HtbNOwSwA41-Lm7MJUzIigK1l9f0EZ_eeLekT8VEFzfp2ZhiN6_2MjBu22s-RoDgIiE3PIlJNNY7-Xxqz5l6irncsfSZYngf4ZAQdG6Y_VbppUqRVWnUY9A_y461SzhCgKT7pCm7gUFOV-zJjOa7oqQ88cYSPVc40drgZHEwYGuojg4uvOrzMcG1a1c5q7um4WHLB6wk-QrTgPhmujPG-n7C9GcLXMpDAQW3oozxCWoT7RQUUgpYIJwMRqM104lrEGfLVW70v2RzOHabenWghpMbCCj44kdk";

const Trade = () => {
  const [data, setData] = useState(null);

  const connectToMetaApi = async () => {
    // Get instance of MetaApi with your MetaApi token
    const metaApi = new MetaApi(token);
    // Get MetaTrader account
    const account = await metaApi.metatraderAccountApi.getAccount(accountId);

    // Get connection instance
    await account.waitConnected();
    const connection = account.getRPCConnection();

    // Wait until connection is established
    await connection.connect();
    await connection.waitSynchronized();

    return connection;
  };

  const fetchData = async () => {
    const connection = await connectToMetaApi();

    // For example, get account information
    const accountInformation = await connection.getAccountInformation();
    console.log(accountInformation);
    setData(accountInformation);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {!data && <p>Loading...</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
};

export default Trade;
