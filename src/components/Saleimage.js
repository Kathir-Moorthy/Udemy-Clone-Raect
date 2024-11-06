// Sale Image
import saleimage from '../assets/images/sale-image.jpeg'

function Saleimage() {
    return (<div className="sale-image">
        <img src={saleimage} alt="Sale image"></img>
        <div className="sale-image__offer">
            <h2>Udemy Flash Sale! 24 hours to save.</h2>
            <p>Get the top Courses sttarting at just <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>999. Just one
                day to save
                but lifetime to learn.</p>
        </div>
    </div>)
}

export default Saleimage