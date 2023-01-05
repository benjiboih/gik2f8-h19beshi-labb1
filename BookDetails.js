/*Detaljer för varje bok*/
const bookDetails = (book) => { 
    let html = `
    <div id="bookDetail" class="book__details absolute inset-y right-8 rounded-lg bg-white-500 p-4 w-1/5 ml-5 mx-auto 
    flex flex-row text-center text-blue-500 font-bold">
        <img src="${book.coverImage}" alt="Ingen bild tillgänglig"width="100" height="60">
        
        <div class="border"></div>  
        <div class="detail__list">
            <ul class="list">
                <li>Title: ${book.title}</li>
                <li>Author: ${book.author}</li>
                <li>Pages: ${book.pages}</li>
                <li>Release date: ${book.releaseDate}</li>
            </ul>
        </div> 
    </div>
    `;

    return html;
};