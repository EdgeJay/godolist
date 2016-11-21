package main

import (
	"fmt"
	"html/template"
	"net/http"

	"gopkg.in/olebedev/go-duktape.v2"
)

type GetLanding struct {
	http.Handler
}

func (this *GetLanding) ServeHTTP(w http.ResponseWriter, req *http.Request) {
	w.Header().Add("Content-Type", "text/html")

	if len(req.URL.Path) == 1 {
		// prepare to perform server-side rendering
		ctx := duktape.New()
		ctxErr := ctx.PevalFile("public/js/main.js")
		fmt.Println(ctxErr)
		ctx.Pop()
		ctx.DestroyHeap()

		// prepare view template
		tmpl, err := template.ParseFiles("templates/base.html")

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
