exports.handler = async (event) => {
  try {
    const { paymentId, txid } = JSON.parse(event.body);

    const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/complete`, {
      method: "POST",
      headers: {
        Authorization: "Key YOUR_PI_API_KEY",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ txid })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
