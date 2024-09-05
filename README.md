"# Book_Store" 

Run this Path:-
http://localhost:5000/api/books

All Api check in Postman

Books
		Get:- http://localhost:5000/api/books
		Post:- http://localhost:5000/api/books
		{
			"title": "Book added",
			"author": "Author added",
			"genre": "Fiction added"
		}
		PUT:- http://localhost:5000/api/books/66d9d74d7fee9e5aa535015e
		{
			"title": "Updated Book Title",
			"author": "New Author"
		}
		Delete:- http://localhost:5000/api/books/66d9d74d7fee9e5aa535015e
		
		Search by Title:
		GET http://localhost:5000/api/books?title=Book One

		Filter by Author:
		GET http://localhost:5000/api/books?author=Author three

		Paginate Results:
		http://localhost:5000/api/books?page=1&limit=3

Users
		Post:- http://localhost:5000/api/users/register
		{
			"username": "testuser New",
			"password": "testpassword New"
		}

		Get:- http://localhost:5000/api/users/login
		{
			"username": "testuser New",
			"password": "testpassword New"
		}

		It will create a token.


