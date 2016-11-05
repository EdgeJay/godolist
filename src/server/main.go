package main

import "net/http"

func main() {
	http.Handle("/", new(GetLanding))
	http.Handle("/login", new(GetLogin))
	http.ListenAndServe(":9393", nil)
}
