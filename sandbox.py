book = dict()

book["title"] = "Corduroy"
book["author"] = "Don Freeman"

print(book)

books = list()

books += [book]

print(books)

book["title"] = "Harry Potter"
book["author"] = "J. K. Rowling"

books += [book]

print(books[0]["corud"])
