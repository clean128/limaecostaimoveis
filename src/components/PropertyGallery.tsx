import { useState } from 'react'

type PropertyGalleryProps = {
  images: string[]
  title: string
  status: string
}

export function PropertyGallery({ images, title, status }: PropertyGalleryProps) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="detail-gallery">
      <div className="detail-main-image">
        <img src={images[activeImage]} alt={title} />
        <span>{status}</span>
      </div>
      <div className="detail-thumbs">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={index === activeImage ? 'is-active' : ''}
            onClick={() => setActiveImage(index)}
            aria-label={`Ver imagem ${index + 1} de ${title}`}
          >
            <img src={image} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}
