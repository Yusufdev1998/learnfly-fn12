const key =
  "a_lt0eJDSOXM1FIJIC64CDK9AEsD9aRQbZC3LuJCLjcVk1FojMpHRZIM68qLPgZYb0j7Tquv1veW18GCrZ";
async function getTranslation(text) {
  if (text) {
    const response = await fetch(
      "https://api-b2b.backenster.com/b1/api/v3/translate",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: key,
        },
        body: JSON.stringify({
          from: "en_GB",
          to: "uz_UZ",
          data: text,
          platform: "api",
        }),
      }
    );
    return response.json();
  } else
    return {
      result: "",
    };
}
