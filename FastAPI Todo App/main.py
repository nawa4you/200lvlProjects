# from typing import Optional, Union #Import Optional and Union.
# from contextlib import asynccontextmanager
# from datetime import datetime
# from typing import Annotated

# from fastapi import Depends, FastAPI, HTTPException, Request
# from fastapi.responses import HTMLResponse, RedirectResponse
# from fastapi.staticfiles import StaticFiles
# from fastapi.templating import Jinja2Templates
# from sqlmodel import SQLModel, Field, Session, create_engine, select
# from fastapi.middleware.gzip import GZipMiddleware
# from pydantic import BaseModel
# from starlette.middleware.sessions import SessionMiddleware
# from dotenv import load_dotenv
# import os

# load_dotenv()

# # =======================
# # DATABASE CONFIGURATION
# # =======================
# DATABASE_URL = os.getenv('DATABASE_URL')
# engine = create_engine(DATABASE_URL, echo=True)


# def create_tables():
#     SQLModel.metadata.create_all(engine)


# def get_session():
#     with Session(engine) as session:
#         yield session


# SessionDep = Annotated[Session, Depends(get_session)]


# # =======================
# # LIFESPAN EVENT HANDLER
# # =======================
# @asynccontextmanager
# async def lifespan(app: FastAPI):
#     create_tables()
#     yield
#     engine.dispose()


# app = FastAPI(lifespan=lifespan)
# templates = Jinja2Templates(directory="templates")

# app.mount("/static", StaticFiles(directory="./static"), name="static")
# app.add_middleware(GZipMiddleware)
# app.add_middleware(SessionMiddleware, secret_key="key")

# # =======================
# # MODELS
# # =======================


# class Todo(SQLModel, table=True):
#     id: Optional[int] = Field(default=None, primary_key=True) #change this line.
#     name: str
#     description: str
#     start_time: datetime
#     end_time: datetime
   


# class TodoCreate(BaseModel):
#     name: str
#     description: str
#     start_time: datetime
#     end_time: datetime



# # =======================
# # ROUTES
# # =======================
# # =======================
# # ROUTES
# # =======================
# @app.get("/", response_class=HTMLResponse)
# def home(request: Request, session: SessionDep):
#     todos = session.exec(select(Todo)).all()
#     return templates.TemplateResponse("index.html", {"request": request, "todos": todos})


# @app.get("/todos/create", response_class=HTMLResponse)
# async def show_create_todo_form(request: Request):
#     return templates.TemplateResponse("create_todo.html", {"request": request})


# @app.post('/todos/create', response_class=HTMLResponse)
# async def create_todo(request: Request, session: SessionDep):
#     content_type = request.headers.get("content-type", "")

#     todo_data = None

#     if "application/json" in content_type:
#         data = await request.json()
#         todo_data = TodoCreate(**data)
#     else:  # Assume it's form-encoded
#         form = await request.form()
#         todo_data = TodoCreate(
#             name=form["name"],
#             description=form["description"],
#             start_time=form["start_time"],
#             end_time=form["end_time"]
#         )

#     todo = Todo(**todo_data.model_dump())
#     session.add(todo)
#     session.commit()
#     session.refresh(todo)
#     request.session["flash"] = "Todo created successfully!" # Flash message
#     return RedirectResponse(url='/', status_code=303)


# @app.get("/todos/{todo_id}/edit", response_class=HTMLResponse)
# def edit_todo_form(todo_id: int, request: Request, session: SessionDep):
#     todo = session.get(Todo, todo_id)
#     if not todo:
#         raise HTTPException(status_code=404, detail="Todo not found")
#     return templates.TemplateResponse("edit_todo.html", {"request": request, "todo": todo})


# @app.post("/todos/{todo_id}/edit", response_class=HTMLResponse)
# async def update_todo(todo_id: int, request: Request, session: SessionDep):
#     # Get the todo first
#     todo = session.get(Todo, todo_id)
#     if not todo:
#         raise HTTPException(status_code=404, detail="Todo not found")
    
#     # Get form data
#     form = await request.form()
    
#     # Update todo fields
#     todo.name = form["name"]
#     todo.description = form["description"]
#     todo.start_time = form["start_time"]
#     todo.end_time = form["end_time"]
    
#     session.add(todo)
#     session.commit()
    
#     request.session["flash"] = "Todo updated successfully!"
#     return RedirectResponse(url=f"/todos/{todo_id}", status_code=303)


# @app.delete("/todos/{todo_id}/delete", response_class=HTMLResponse)
# def delete_todo(todo_id: int, request: Request, session: SessionDep):
#     todo = session.get(Todo, todo_id)
#     session.delete(todo)
#     session.commit()
#  
# @app.get("/todos/{todo_id}", response_class=HTMLResponse)
# def get_todo(todo_id: int, request: Request, session: SessionDep):
#     print("this is the todo idid")
#     print(todo_id)
#     todo = session.get(Todo, todo_id)
#     if not todo:
#         raise HTTPException(status_code=404, detail="Todo not found")
#     return templates.TemplateResponse("todo_detail.html", {"request": request, "todo": todo})
#   




from typing import Optional, Union  # Import Optional and Union.
from contextlib import asynccontextmanager
from datetime import datetime
from typing import Annotated

from fastapi import Depends, FastAPI, HTTPException, Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from sqlmodel import SQLModel, Field, Session, create_engine, select
from fastapi.middleware.gzip import GZipMiddleware
from pydantic import BaseModel
from starlette.middleware.sessions import SessionMiddleware
from dotenv import load_dotenv
import os

load_dotenv()

# =======================
# DATABASE CONFIGURATION
# =======================
DATABASE_URL = os.getenv('DATABASE_URL')
engine = create_engine(DATABASE_URL, echo=True)


def create_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session


SessionDep = Annotated[Session, Depends(get_session)]


# =======================
# LIFESPAN EVENT HANDLER
# =======================
@asynccontextmanager
async def lifespan(app: FastAPI):
    create_tables()
    yield
    engine.dispose()


app = FastAPI(lifespan=lifespan)
templates = Jinja2Templates(directory="templates")

app.mount("/static", StaticFiles(directory="./static"), name="static")
app.add_middleware(GZipMiddleware)
app.add_middleware(SessionMiddleware, secret_key="key")

# =======================
# MODELS
# =======================


class Todo(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)  # change this line.
    name: str
    description: str
    start_time: datetime
    end_time: datetime


class TodoCreate(BaseModel):
    name: str
    description: str
    start_time: datetime
    end_time: datetime


# =======================
# ROUTES
# =======================
# =======================
# ROUTES
# =======================
@app.get("/", response_class=HTMLResponse)
def home(request: Request, session: SessionDep):
    todos = session.exec(select(Todo)).all()
    return templates.TemplateResponse("index.html", {"request": request, "todos": todos})


@app.get("/todos/create", response_class=HTMLResponse)
async def show_create_todo_form(request: Request):
    return templates.TemplateResponse("create_todo.html", {"request": request})


@app.post('/todos/create', response_class=RedirectResponse)
async def create_todo(request: Request, session: SessionDep):
    content_type = request.headers.get("content-type", "")

    todo_data = None

    if "application/json" in content_type:
        data = await request.json()
        todo_data = TodoCreate(**data)
    else:  # Assume it's form-encoded
        form = await request.form()
        todo_data = TodoCreate(
            name=form["name"],
            description=form["description"],
            start_time=form["start_time"],
            end_time=form["end_time"]
        )

    todo = Todo(**todo_data.model_dump())
    session.add(todo)
    session.commit()
    session.refresh(todo)
    request.session["flash"] = "Todo created successfully!"  # Flash message
    return RedirectResponse(url='/', status_code=303)


@app.get("/todos/{todo_id}/edit", response_class=HTMLResponse)
def edit_todo_form(todo_id: int, request: Request, session: SessionDep):
    todo = session.get(Todo, todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return templates.TemplateResponse("edit_todo.html", {"request": request, "todo": todo})


@app.post("/todos/{todo_id}/edit", response_class=RedirectResponse)
async def update_todo(todo_id: int, request: Request, session: SessionDep):
    # Get the todo first
    todo = session.get(Todo, todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")

    # Get form data
    form = await request.form()

    # Update todo fields
    todo.name = form["name"]
    todo.description = form["description"]
    todo.start_time = form["start_time"]
    todo.end_time = form["end_time"]

    session.add(todo)
    session.commit()

    request.session["flash"] = "Todo updated successfully!"
    return RedirectResponse(url=f"/todos/{todo_id}", status_code=303)


@app.delete("/todos/{todo_id}/delete", response_class=RedirectResponse)
def delete_todo(todo_id: int, request: Request, session: SessionDep):
    todo = session.get(Todo, todo_id)
    if todo:
        session.delete(todo)
        session.commit()
        request.session["flash"] = "Todo deleted successfully!"
    else:
        request.session['flash'] = "Todo not found"
    return RedirectResponse(url="/", status_code=303)


@app.get("/todos/{todo_id}", response_class=HTMLResponse)
def get_todo(todo_id: int, request: Request, session: SessionDep):
    todo = session.get(Todo, todo_id)
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    return templates.TemplateResponse("todo_detail.html", {"request": request, "todo": todo})