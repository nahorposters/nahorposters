/* ==================================================================
   NAHOR POSTERS — PRODUCT DATA
   ==================================================================

   HOW THIS FILE IS ORGANIZED
   ---------------------------------------------------------------
   A3 Split Posters, A4 Set of 3, A4 Set of 6, and A4 Set of 10 are
   FOUR SEPARATE CATALOGS (the CATEGORIES array below) — each is its
   own section on the page with its own fixed price. Inside each
   category is a `designs` array — one entry per poster design. You
   can have as many designs in a category as you want; the page
   automatically lays them out in a grid and wraps to new rows, so
   there's no limit to plan around.

   ---------------------------------------------------------------
   HOW TO ADD YOUR OWN IMAGES (local files, not links)
   ---------------------------------------------------------------
   1. Create a folder named "images" in the SAME folder as the HTML
      file (index.html, or nahor-posters-homepage.html if you're
      using the single-file version).
   2. Put your photos in that folder, e.g.:
        images/C1PC1IM1.png
        images/C1PC1IM2.png
        images/C1PC1IM3.png
   3. Reference them below as a relative path: "images/C1PC1IM1.png"
      (no https://, just the folder + filename).

   Suggested naming scheme (you can rename however you like, as long
   as the path below matches the real filename):
        PosterC{category number}D{design number}IM{image number}.png
        C1 = A3 Split Posters   C2 = A4 Set of 3
        C3 = A4 Set of 6        C4 = A4 Set of 10
   Example: "C2PC3IM1.png" = Category 2 (A4 Set of 3), 3rd design,
   1st image. 2–3 images per design is enough for the swipe gallery.

   ---------------------------------------------------------------
   HOW TO ADD A NEW POSTER DESIGN (copy/paste this into any
   category's `designs` array, then fill in your own values)
   ---------------------------------------------------------------
    {
      id: "UNIQUE-ID-HERE",              // must be unique across ALL designs in this file
      name: "Poster Name Here",          // shown on the card
      collection: "Style Tag Here",      // small label above the name, e.g. "Cinematic Noir"
      rating: 4.8,                       // shown as stars
      reviews: 120,                      // review count shown in parentheses
      stock: "In Stock",                 // or "Low Stock"
      images: [
        "images/YourFileName1.png",
        "images/YourFileName2.png",
        "images/YourFileName3.png"
      ]
    },

   That's it — no other file needs to change. The grid, swipe gallery,
   cart, wishlist, search, and Quick View all read from this file
   automatically.
   ================================================================== */

const PAPER_SPEC = "300GSM paper · adhesive tabs on back — sticks straight to your wall";

/* Each catalog = one real product line with its own fixed price. */
const CATEGORIES = [
  {
    id: "a3-split",
    name: "A3 Split Posters",
    sub: "Set of 3 sheets — combine on your wall into one large piece",
    price: 249,
    designs: [
      {
        id: "a3-1", name: "Midnight Skyline", collection: "Cinematic Noir",
        rating: 4.8, reviews: 214, stock: "In Stock",
        images: [
          "images/C1PC1IM1.png",
          "images/C1PC1IM2.png",
          "images/C1PC1IM3.png"
        ]
      },
      {
        id: "a3-2", name: "Vintage Grand Prix", collection: "Automotive Icons",
        rating: 4.9, reviews: 331, stock: "In Stock",
        images: [
          "images/C1PC2IM1.png",
          "images/C1PC2IM2.png",
          "images/C1PC2IM3.png"
        ]
      },
      {
        id: "a3-3", name: "Fluid Motion No. 3", collection: "Abstract Motion",
        rating: 4.7, reviews: 148, stock: "In Stock",
        images: [
          "images/C1PC3IM1.png",
          "images/C1PC3IM2.png",
          "images/C1PC3IM3.png"
        ]
      },
      {
        id: "a3-4", name: "Monochrome Study I", collection: "Monochrome Studies",
        rating: 4.6, reviews: 96, stock: "Low Stock",
        images: [
          "images/C1PC4IM1.png",
          "images/C1PC4IM2.png",
          "images/C1PC4IM3.png"
        ]
      }

      /* Add more A3 Split designs here — copy the template at the
         top of this file, paste it above this line, and give it its
         own id (e.g. "a3-5") and image filenames (C1PC5IM1.png…) */
    ]
  },
  {
    id: "a4-3",
    name: "A4 Poster Set of 3",
    sub: "Three A4 prints, sold as one set",
    price: 149,
    designs: [
      {
        id: "a43-1", name: "Neon District", collection: "Cinematic Noir",
        rating: 4.9, reviews: 402, stock: "In Stock",
        images: [
          "images/C2PC1IM1.png",
          "images/C2PC1IM2.png",
          "images/C2PC1IM3.png"
        ]
      },
      {
        id: "a43-2", name: "Coupe Silhouette", collection: "Automotive Icons",
        rating: 4.8, reviews: 187, stock: "In Stock",
        images: [
          "images/C2PC2IM1.png",
          "images/C2PC2IM2.png",
          "images/C2PC2IM3.png"
        ]
      },
      {
        id: "a43-3", name: "Ink Drift", collection: "Abstract Motion",
        rating: 4.5, reviews: 76, stock: "In Stock",
        images: [
          "images/C2PC3IM1.png",
          "images/C2PC3IM2.png",
          "images/C2PC3IM3.png"
        ]
      },
      {
        id: "a43-4", name: "Concrete Form", collection: "Monochrome Studies",
        rating: 4.7, reviews: 121, stock: "In Stock",
        images: [
          "images/C2PC4IM1.png",
          "images/C2PC4IM2.png",
          "images/C2PC4IM3.png"
        ]
      }

      /* Add more A4 Set-of-3 designs here (id "a43-5", images
         C2PC5IM1.png…) */
    ]
  },
  {
    id: "a4-6",
    name: "A4 Poster Set of 6",
    sub: "Six A4 prints, sold as one set",
    price: 249,
    designs: [
      {
        id: "a46-1", name: "Late Hour", collection: "Cinematic Noir",
        rating: 4.8, reviews: 34, stock: "In Stock",
        images: [
          "images/C3PC1IM1.png",
          "images/C3PC1IM2.png",
          "images/C3PC1IM3.png"
        ]
      },
      {
        id: "a46-2", name: "Track Day", collection: "Automotive Icons",
        rating: 4.9, reviews: 22, stock: "In Stock",
        images: [
          "images/C3PC2IM1.png",
          "images/C3PC2IM2.png",
          "images/C3PC2IM3.png"
        ]
      },
      {
        id: "a46-3", name: "Amber Wave", collection: "Abstract Motion",
        rating: 4.7, reviews: 15, stock: "Low Stock",
        images: [
          "images/C3PC3IM1.png",
          "images/C3PC3IM2.png",
          "images/C3PC3IM3.png"
        ]
      },
      {
        id: "a46-4", name: "Structure No. 9", collection: "Monochrome Studies",
        rating: 4.6, reviews: 18, stock: "In Stock",
        images: [
          "images/C3PC4IM1.png",
          "images/C3PC4IM2.png",
          "images/C3PC4IM3.png"
        ]
      }

      /* Add more A4 Set-of-6 designs here (id "a46-5", images
         C3PC5IM1.png…) */
    ]
  },
  {
    id: "a4-10",
    name: "A4 Poster Set of 10",
    sub: "Ten A4 prints, sold as one set",
    price: 299,
    designs: [
      {
        id: "a410-1", name: "Night Circuit", collection: "Cinematic Noir",
        rating: 4.8, reviews: 41, stock: "In Stock",
        images: [
          "images/C4PC1IM1.png",
          "images/C4PC1IM2.png",
          "images/C4PC1IM3.png"
        ]
      },
      {
        id: "a410-2", name: "Chrome Line", collection: "Automotive Icons",
        rating: 4.9, reviews: 29, stock: "In Stock",
        images: [
          "images/C4PC2IM1.png",
          "images/C4PC2IM2.png",
          "images/C4PC2IM3.png"
        ]
      },
      {
        id: "a410-3", name: "Drift Study", collection: "Abstract Motion",
        rating: 4.6, reviews: 19, stock: "In Stock",
        images: [
          "images/C4PC3IM1.png",
          "images/C4PC3IM2.png",
          "images/C4PC3IM3.png"
        ]
      },
      {
        id: "a410-4", name: "Grey Form", collection: "Monochrome Studies",
        rating: 4.7, reviews: 27, stock: "Low Stock",
        images: [
          "images/C4PC4IM1.png",
          "images/C4PC4IM2.png",
          "images/C4PC4IM3.png"
        ]
      }

      /* Add more A4 Set-of-10 designs here (id "a410-5", images
         C4PC5IM1.png…) */
    ]
  }

  /* You can also add a brand-new CATEGORY (a 5th product line) by
     copying one of the four blocks above — give it a unique id,
     name, sub, price, and its own designs array. It'll automatically
     get its own section on the page. */
];

function categoryById(id){ return CATEGORIES.find(c => c.id === id); }
function findDesign(designId){
  for (const cat of CATEGORIES){
    const d = cat.designs.find(x => x.id === designId);
    if (d) return { design: d, category: cat };
  }
  return null;
}
