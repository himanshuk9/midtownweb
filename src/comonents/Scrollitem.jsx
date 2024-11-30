import React, { useState } from 'react'

function Scrollitem() {

const items = [
    { id: 1, name: "Burger", img: "https://static.vecteezy.com/system/resources/previews/032/508/298/non_2x/a-tempting-burger-on-a-plate-isolated-on-a-transparent-background-fresh-tasty-and-appetizing-with-delicious-layers-ai-generative-free-png.png" },
        
    { id: 2, name: "Pizza", img: "https://static.vecteezy.com/system/resources/previews/021/311/734/original/pizza-transparent-background-png.png" },
        
    { id: 3, name: "Chowmein", img: "https://noveltysweets.co.nz/wp-content/uploads/2021/08/Veg-Chowmein-min.png" },
        
    { id: 4, name: "Momos", img: "https://www.8848momos.com.au/wp-content/uploads/Steamed-8848-Momos.png" },
        
    { id: 5, name: "Biryani", img: "https://cdn.pixabay.com/photo/2023/07/12/20/40/ai-generated-8123329_1280.png" },
        
    { id:6 , name: "Pasta", img: "https://www.pngkey.com/png/full/72-724075_italian-pasta-png-penne-pasta-png.png" },

    { id:7,  name: "Chiken", img: "https://www.pngkit.com/png/full/794-7942995_shutterstock-chicken-curry.png" },
    { id:8,  name: "Cake", img: "https://purepng.com/public/uploads/large/purepng.com-cakefood-chocolate-slice-cake-sweet-tasty-piece-eat-delicious-9415246166160hbsv.png" },
    { id:9,  name: "Samosa", img: "https://static.vecteezy.com/system/resources/previews/025/269/767/original/samosa-with-ai-generated-free-png.png" },
    { id:10, name: "Kachori", img: "https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0135_136-Kachori.png" },
    { id:11, name: "Coffee", img: "https://i.pinimg.com/originals/5e/33/8b/5e338bf657f13da803b53d1b96f0e6a8.png" },
    { id: 12, name: "Idli", img: "https://pluspng.com/img-png/idli-png-idli-533.png" },
    { id:13, name: "Juice", img: "https://www.pngall.com/wp-content/uploads/9/Orange-Juice-Splash-PNG.png" },
    { id:13, name: "Pav- Bhaji", img: "https://noveltysweets.co.nz/wp-content/uploads/2021/08/Pav-Bhaji-min.png" },
 
    ];


    return (

        <>
             <div className="slider-container">
            <div className="slider-track">
                {items.map((item) => (
                    <div className="slide" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
{/* 
 
               
        



                <div className="sitem">
                    <img src="" alt="Rotating Image" class="rotating-image" />

                    <h5><b>Cake</b></h5>
                </div>

                <div className="sitem">
                    <img src="" alt="Rotating Image" class="rotating-image" />

                    <h5><b>Samosa</b></h5>
                </div>

                <div className="sitem">
                    <img src="https://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0135_136-Kachori.png" alt="Rotating Image" class="rotating-image" />

                    <h5><b>Kachori</b></h5>
                </div>



                <div className="sitem">
                    <img src="https://i.pinimg.com/originals/5e/33/8b/5e338bf657f13da803b53d1b96f0e6a8.png" alt="Rotating Image" class="rotating-image" />

                    <h5><b>Coffee</b></h5>
                </div>

                <div className="sitem">
                    <img src="https://pluspng.com/img-png/idli-png-idli-533.png" alt="Rotating Image" class="rotating-image" />

                    <h5><b>Idli</b></h5>
                </div>

                <div className="sitem">
                    <img src="https://www.pngall.com/wp-content/uploads/9/Orange-Juice-Splash-PNG.png" alt="Rotating Image" class="rotating-image" />

                    <h5><b>Juice</b></h5>
                </div>


                <div className="sitem">
                    <img src="https://noveltysweets.co.nz/wp-content/uploads/2021/08/Pav-Bhaji-min.png" alt="Rotating Image" class="rotating-image" />

                    <h5><b>Pav- Bhaji</b></h5>
                </div>


                <div className="sitem">
                    <img src="http://clipart-library.com/images_k/ice-cream-scoop-transparent-background/ice-cream-scoop-transparent-background-11.png" alt="Rotating Image" class="rotating-image" />
                    <h5><b>Ice-cream</b></h5>
                </div>

                <div className="sitem">
                    <img src="https://mysorecafe.com.au/wp-content/uploads/2022/07/Poori-Saagu-300x300.png" alt="Rotating Image" class="rotating-image" />

                    <h5><b>Chole-Bhature</b></h5>
                </div>

            </div> */}





        </>
    )
}

export default Scrollitem
