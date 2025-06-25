import './SerachBar.css';
function SearchBar(){
    return(
        <div>
            <div class="search-bar">
                <div class="search-item">
                  <label for="destination">Where</label>
                  <input type="text" id="destination" placeholder="Search destinations"/>
                </div>
                <div class="search-item">
                  <label for="checkin">Check in</label>
                  <input type="text" id="checkin" placeholder="Add dates"/>
                </div>
                <div class="search-item">
                  <label for="checkout">Check out</label>
                  <input type="text" id="checkout" placeholder="Add dates"/>
                </div>
                <div class="search-item">
                  <label for="guests">Who</label>
                  <input type="text" id="guests" placeholder="Add guests"/>
                </div>
                <button class="search-button">
                  <span>🔍</span>
                </button>
            </div>
        </div>
    )
}
export default SearchBar