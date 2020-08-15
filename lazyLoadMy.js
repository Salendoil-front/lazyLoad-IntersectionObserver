const urls = [
	'./images/1.jpg',
	'./images/2.jpg',
	'./images/3.jpg',
	'./images/11.jpg',
	'./images/22.jpg',
	'./images/33.jpg',
	'./images/111.jpg',
	'./images/222.jpg',
	'./images/333.jpg',
	'./images/444.jpg',
]

const imagesRender = (url) => {
	return(
		`
		<img data=${url} />
		`
	)
}

const render = (arr) => {
	arr.forEach(item => {
		document.getElementById('root').innerHTML += imagesRender(item)
	})
}

render(urls)

const images = document.querySelectorAll('img')
console.log(images);


const options = {
	root: null,
	rootMargin: '0px',
	threshold: 0.1
}

const callBack = (entries, observer) => {
	entries.forEach(item => {
		console.log(item.intersectionRatio)
		if(item.intersectionRatio > 0){
			loadSrc(item.target)
		}
	})
}

const loadSrc = (img)=>{
	img.src = img.getAttribute('data')
}

const observer = new IntersectionObserver(callBack, options)

images.forEach(img => {
	observer.observe(img)
})
















// document.addEventListener('DOMContentLoaded',() => {
// 	render(urls)
// })