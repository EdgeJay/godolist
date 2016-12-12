package main

import (
	"fmt"
	"html/template"
	"io/ioutil"
	"net/http"
)

type GetLanding struct {
	http.Handler
}

func (this *GetLanding) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	w.Header().Add("Content-Type", "text/html")

	if len(req.URL.Path) == 1 {
		// prepare view template
		tmpl, err := template.ParseFiles("templates/base.html")

		if err == nil {
			context := BaseContext{
				"Welcome to GODO List",
				false,
			}

			// read html for server-side rendering
			mount, err2 := ioutil.ReadFile("templates/main.html")

			if err2 == nil {
				tmpl.New("mount").Parse(string(mount))
			}

			tmpl.Execute(w, context)
		} else {
			fmt.Println(err)
		}
	} else {
		w.WriteHeader(404)
	}
}
