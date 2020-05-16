import tornado.ioloop
import tornado.web
from tornado.web import url

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("welcome.html",link = self.reverse_url("houses"))

class PageHandler(tornado.web.RequestHandler):
    def get(self):
        self.render("houses.html")

def make_app():
    settings = {
        'template_path': 'template',
        'static_path': 'static'
    }
    return tornado.web.Application([
        (r"/", MainHandler),
        # url(r"/register",RegisterHandler,name = "register"),
        # url(r"/login",LoginHandler, name = 'login')
        url(r"/houses",PageHandler,name = "houses"),
    ], **settings)

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()