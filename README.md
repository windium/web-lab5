# Assignment 5 – React Product Dashboard

A small React app built with Vite. It shows a list of products that can be
shown or hidden with a button, and greets the user by the name they type. All
data is hard-coded and every piece of UI is driven by `useState`.

Live demo: https://windium.github.io/web-lab5/

## How to run

```
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173). `npm run build`
creates a production build in `dist/`.

## File organization

```
/web-lab5
 ├─ src/
 │   ├─ components/
 │   │   ├─ Card.jsx         Layout wrapper: renders its children with a border, padding and margin
 │   │   ├─ Product.jsx      One product: shows title and price from props, wrapped in a Card
 │   │   └─ ProductList.jsx  Static product array rendered with .map(), keyed by id
 │   ├─ App.jsx              Root component: owns the showProducts and name state
 │   └─ main.jsx             Mounts App into #root
 ├─ index.html
 └─ package.json
```

`.github/workflows/deploy.yml` builds the app and publishes it to GitHub Pages
on every push to `main`. `node_modules` and `dist` are ignored by git.

### App.jsx

- `showProducts` (boolean) starts as `false`. The button flips it and its text
  switches between **Show Products** and **Hide Products**.
- `name` (string) is bound to the input with `value` and `onChange`, so the
  input is controlled. The paragraph below it shows `Hello, {name}`.
- `{showProducts && <ProductList />}` renders the list only when the state is
  `true`. Nothing touches the DOM directly.

### ProductList.jsx

Defines the products array (Laptop, Phone, Tablet) and turns it into
`<Product>` elements with `.map()`. Each one gets `key={product.id}` and
receives only `title` and `price` as props.

### Product.jsx

A stateless component. It reads `title` and `price` from props and puts them
inside a `Card`, so the same component works for any product.

### Card.jsx

Only knows about `children`. It renders whatever it is given inside a styled
`div`, so it can wrap anything, not just products.

## Challenges

- **Where the state should live.** The visibility flag belongs to the list,
  but the button that changes it is in `App`. Keeping `showProducts` in `App`
  and rendering `ProductList` conditionally leaves the list component simple
  and free of state.
- **Controlled input.** With `value` set, the input only changes when
  `setName` runs in `onChange`. Setting `value` without `onChange` makes the
  field read-only.
- **Keys in lists.** Using the array index as a key is easy but breaks if the
  order changes. Each product has a unique `id`, so that is used as the key.
- **Keeping Card generic.** Passing `title` and `price` into `Card` would tie
  it to products. Using `children` keeps the layout separate from the content.
- **Deploying under a sub-path.** GitHub Pages serves the site from
  `/web-lab5/`, where Vite's default absolute asset paths (`/assets/...`)
  would not load. Setting `base: './'` in `vite.config.js` makes them relative.
