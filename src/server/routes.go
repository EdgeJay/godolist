package main

import (
	"net/http"
)

type GetLanding struct {
	http.Handler
}

func (this *GetLanding) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	w.Write([]byte("woah"))
}

type GetLogin struct {
	http.Handler
}

func (this *GetLogin) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	w.Write([]byte("login"))
}
