import tornado.ioloop
import tornado.web
from tornado.web import url
import json
import pymysql

# db = pymysql.Connection(host='localhost',user='root',password='MyNewPass4!',
#                    database='aaa',charset='utf8',port=3306)
# class MainHandler(tornado.web.RequestHandler):
#     def get(self):
#         self.render('houses.html')
class BaseHandler(tornado.web.RequestHandler):
    def set_default_headers(self):
        self.set_header("Access-Control-Allow-Origin", "http://localhost:8080") # 这个地方可以写域名
        self.set_header('Access-Control-Allow-Credentials', 'true')
        self.set_header("Access-Control-Allow-Headers", "x-requested-with,Content-Type,charset")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
 
    def post(self):
        self.write('some post')
 
    def get(self):
        self.write('some get')
 
    def options(self):
        self.set_status(204)
        self.finish()

class RegisterHandler(BaseHandler):
    def post(self):
        jsonstr = self.request.body
        jsonstr = jsonstr.decode('utf8')
        jsonobj = json.loads(jsonstr)
        name = jsonobj.get('name')
        pwd = jsonobj.get('pwd')
        json_res = {
            'status':1,
            'info':'用户名重复'
        }
        self.write(json_res)

class LoginHandler(BaseHandler):
    def post(self):
        jsonstr = self.request.body
        jsonstr = jsonstr.decode('utf8')
        jsonobj = json.loads(jsonstr)
        name = jsonobj.get('name')
        pwd = jsonobj.get('pwd')
        self.set_secure_cookie('id', name)
        
        json_res = {
            'status':1,
        }
        self.write(json_res)

class LogoutHandler(BaseHandler):
    def post(self):
        self.clear_cookie('id')        
        json_res = {
            'status':1,
        }
        self.write(json_res)

class GetUserHandler(BaseHandler):
    def post(self):
        userid = ''
        if self.get_secure_cookie('id'):
            userid = self.get_secure_cookie('id')
            userid = str(userid,encoding='utf-8')
            print(userid)
        json_res = {
            'id': userid,
        }
        self.write(json_res)
        

# class HouseInfoHandler(tornado.web.RequestHandler):
#     def post(self):


# class PostHandler(tornado.web.RequestHandler):
#     def get(self):
#         self.render('new_house.html')

# class SearchHandler(tornado.web.RequestHandler):
#     def post(self):

# class SavePostHandler(tornado.web.RequestHandler):
#     def post(self):

# class SubmitPostHandler(tornado.web.RedirectHandler):
#     def post(self):

def make_app():
    settings = {
        'template_path': 'template',
        'static_path': 'static',
        'cookie_secret':"61oETzKXQAGaYdghdhgfhfhfg"
    }
    return tornado.web.Application([
        # (r"/", MainHandler),
        (r"/register",RegisterHandler),
        (r"/login",LoginHandler),
        (r"/logout",LogoutHandler),
        (r"/getcurrentuser",GetUserHandler)
        # (r"/newhouses" NewHousesHandler),
        # (r"/hothouses", HotHousesHandler),
        # (r'/house', HouseInfoHandler),
        # (r"/search", SearchHandler),
        # (r"/newpost/save",SavePostHandler),
        # (r"/newpost/submit" SubmitPostHandler)
    ], debug = True, **settings)

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()