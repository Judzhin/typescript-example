function strip(x: string | number) {
  if (typeof x === "number") return x.toFixed(2);
  return x.trim();
}

class MResponse {
  header: "response header";
  result: "response result";
}

class Err {
  header: "err header";
  message: "err message";
}

function handlel(res: MResponse | Err) {
  if (res instanceof MResponse) {
    return {
      info: res.header + res.result,
    };
  } else {
    return {
      info: res.header + res.message,
    };
  }
}

//============================================================================
type AlertType = "alert" | "success" | "warning" | "error" | "warning" | "info";

function setAlertType(type: AlertType) {
    // ...
}

setAlertType('alert');
setAlertType('success');
// setAlertType('default');