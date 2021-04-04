# Auto Text Effect

![screen recording](https://media.giphy.com/media/3oGlHnt6y9KE7YHf47/giphy.gif)

#### project notes

1. HTML

- h1: We Love Programming!
- (speed control) div: Speed: div + span

2. CSS

- background color
- animation => couldn't make it nice. used JS instead.

3. JavaScript

- control the speed
- charAt and setTimeout for the typing effect

* Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML

- for the speed section: using label & input

2. CSS

- background-color almost transparent: rgba(0,0,0,0.1)

3. JavaScript

- for the typing effect used slice instead of charAt
- eventListener type is 'input'

```
speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)
```
