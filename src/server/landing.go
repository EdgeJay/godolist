package main

import (
	"fmt"
	"html/template"
	"net/http"
)

type GetLanding struct {
	http.Handler
}

func (this *GetLanding) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	w.Header().Add("Content-Type", "text/html")

	if len(req.URL.Path) == 1 {
		// prepare view template
		tmpl, err := template.ParseFiles("src/server/views/base.html")

		if err == nil {
			context := BaseContext{
				"Welcome to GODO List",
				false,
			}

			tmpl.Execute(w, context)
		} else {
			fmt.Println(err)
		}
	} else {
		w.WriteHeader(404)
	}
}
