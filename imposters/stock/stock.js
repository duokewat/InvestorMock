function stockResponse(request, state) {
  return {
      statusCode: 200,
      body: {
        "quoteResponse":{
          "result":[
              {
                "regularMarketPrice":83.75
              }
          ]
        }
    },
    headers: {
      "Content-Type": "application/json"
    }
  };
}