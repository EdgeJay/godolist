package main

import "net/http"

type GetLogin struct {
	http.Handler
}

func (this *GetLogin) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	w.Write([]byte("login!!!"))
}
