import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';


export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const newHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });
  let clone = req.clone({headers: newHeaders});
  return next(req);
};
