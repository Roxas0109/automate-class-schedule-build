function getAPIHost(){
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return "http://localhost:80/api/";
  } else {
    return "/";
  }
}

export default {getAPIHost}
