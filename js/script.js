const form = document.getElementById("request-form");
const urlInput = document.getElementById("url");
const methodSelect = document.getElementById("method");
const queryParamsInput = document.getElementById("query-params");
const headersInput = document.getElementById("headers");
const bodyInput = document.getElementById("body");
const dataContainer = document.getElementById("data");
const loadingIndicator = document.getElementById("loading");
const statusCodeContainer = document.getElementById("status-code");
const errorMessageContainer = document.getElementById("error-message");

form.addEventListener("submit", async event => {
  event.preventDefault();
  const url = urlInput.value;
  const method = methodSelect.value;
  const queryParams = queryParamsInput.value;
  const headers = headersInput.value;
  const body = bodyInput.value;
  loadingIndicator.style.display = "block";
  dataContainer.innerHTML = "";
  statusCodeContainer.innerHTML = "";
  errorMessageContainer.innerHTML = "";

  try {
    let fetchUrl = url;
    if (queryParams) {
      fetchUrl += "?" + new URLSearchParams(JSON.parse(queryParams)).toString();
    }
    const headersObj = headers ? JSON.parse(headers) : {};
    headersObj["Content-Type"] = "application/json";
    const response = await fetch(fetchUrl, {
      method,
      headers: headersObj,
      body: body ? JSON.stringify(JSON.parse(body)) : undefined
    });
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    dataContainer.innerHTML = JSON.stringify(data, null, 2);
    statusCodeContainer.innerHTML = `Status code: ${response.status}`;
  } catch (error) {
    errorMessageContainer.innerHTML = error.message;
  } finally {
    loadingIndicator.style.display = "none";
  }
});
