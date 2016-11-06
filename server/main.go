package main

import (
	"net/http"
)

func main() {
	http.Handle("/", new(GetLanding))
	http.Handle("/login", new(GetLogin))

	// static assets
	http.Handle("/assets/", http.StripPrefix("/assets", http.FileServer(http.Dir("public/"))))

	http.ListenAndServe("localhost:9393", nil)
}
