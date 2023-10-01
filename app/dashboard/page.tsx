// import image from 'next/image'

const DashBoard = () => {

  //create an array of 50 images url from unsplash
  const $images = [
    { id: 1, url:  'https://random.imagecdn.app/100/150'     },
    { id: 2, url:  'https://random.imagecdn.app/200/150'     },
    { id: 3, url:  'https://random.imagecdn.app/300/150'     },
    { id: 4, url:  'https://random.imagecdn.app/400/150'     },
    { id: 5, url:  'https://random.imagecdn.app/500/150'     },
    { id: 6, url:  'https://random.imagecdn.app/600/150'     },
    { id: 7, url:  'https://random.imagecdn.app/700/150'     },
    { id: 8, url:  'https://random.imagecdn.app/800/150'     },
    { id: 9, url:  'https://random.imagecdn.app/900/150'     },
    { id: 10, url: 'https://random.imagecdn.app/1000/150'     },

  ]

  return (
    <div>
      {/* for each object in images */}
      {$images.map((image) => (
        <div key={image.id}>
          
         
        </div>
      ))}
<h1>asd</h1>

    </div>
  )
}

export default DashBoard