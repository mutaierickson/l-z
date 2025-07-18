export interface Product {
  id: string
  name: string
  price: number
  category: string
  description: string
  image: string
  inStock: boolean
  features?: string[]
  specifications?: { [key: string]: string }
}

export const CATEGORIES = [
  "Medical Equipment",
  "Surgical Instruments", 
  "Laboratory Supplies",
  "Disposables",
  "Pharmaceuticals"
]

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Digital Blood Pressure Monitor",
    price: 12500,
    category: "Medical Equipment",
    description: "Professional-grade automatic blood pressure monitor with large LCD display and memory storage.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop",
    inStock: true,
    features: [
      "Automatic inflation and deflation",
      "Memory storage for 60 readings",
      "Large LCD display",
      "Irregular heartbeat detection",
      "WHO indicator"
    ],
    specifications: {
      "Measurement Range": "Systolic: 60-280 mmHg, Diastolic: 40-150 mmHg",
      "Accuracy": "±3 mmHg",
      "Cuff Size": "22-32 cm",
      "Power": "4 AA batteries or AC adapter",
      "Warranty": "2 years"
    }
  },
  {
    id: "2",
    name: "Surgical Suture Kit",
    price: 3200,
    category: "Surgical Instruments",
    description: "Complete sterile suture kit with various needle types and suture materials for different procedures.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop",
    inStock: true,
    features: [
      "Sterile packaged",
      "Multiple needle sizes",
      "Various suture materials",
      "Disposable forceps included",
      "Detailed instruction guide"
    ]
  },
  {
    id: "3",
    name: "Digital Thermometer",
    price: 1800,
    category: "Medical Equipment", 
    description: "Fast and accurate digital thermometer with flexible tip and fever alarm.",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=400&fit=crop",
    inStock: true,
    features: [
      "60-second reading",
      "Fever alarm",
      "Waterproof",
      "Memory recall",
      "Auto shut-off"
    ]
  },
  {
    id: "4",
    name: "Disposable Face Masks (50pcs)",
    price: 850,
    category: "Disposables",
    description: "High-quality 3-layer disposable face masks with bacterial filtration efficiency >95%.",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=400&h=400&fit=crop",
    inStock: true,
    features: [
      "3-layer protection",
      "Bacterial filtration >95%",
      "Comfortable ear loops",
      "Latex-free",
      "CE certified"
    ]
  },
  {
    id: "5",
    name: "Stethoscope - Cardiology Grade",
    price: 15600,
    category: "Medical Equipment",
    description: "Professional cardiology stethoscope with superior acoustic sensitivity and dual-head design.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
    inStock: true,
    features: [
      "Dual-head chest piece",
      "Superior acoustic sensitivity",
      "Comfortable ear tips",
      "Latex-free construction",
      "5-year warranty"
    ]
  },
  {
    id: "6",
    name: "Pulse Oximeter",
    price: 4200,
    category: "Medical Equipment",
    description: "Fingertip pulse oximeter for measuring oxygen saturation and pulse rate with OLED display.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop",
    inStock: true,
    features: [
      "OLED display",
      "SpO2 and pulse rate",
      "Low battery indicator",
      "Auto shut-off",
      "Lanyard included"
    ]
  },
  {
    id: "7",
    name: "Disposable Syringes 10ml (100pcs)",
    price: 2100,
    category: "Disposables",
    description: "Sterile disposable syringes with safety lock mechanism and clear graduation marks.",
    image: "https://images.unsplash.com/photo-1576673442511-7e39b6545c87?w=400&h=400&fit=crop",
    inStock: true,
    features: [
      "Sterile and disposable",
      "Safety lock mechanism",
      "Clear graduation marks",
      "Latex-free",
      "CE certified"
    ]
  },
  {
    id: "8",
    name: "Surgical Scissors Set",
    price: 5800,
    category: "Surgical Instruments",
    description: "Professional surgical scissors set with different blade types for various procedures.",
    image: "https://images.unsplash.com/photo-1631815588090-9cd9e1d8e0f7?w=400&h=400&fit=crop",
    inStock: true,
    features: [
      "Stainless steel construction",
      "Sharp and precise cuts",
      "Ergonomic handles",
      "Autoclavable",
      "Various blade types"
    ]
  },
  {
    id: "9",
    name: "Laboratory Microscope",
    price: 85000,
    category: "Laboratory Supplies",
    description: "High-quality laboratory microscope with LED illumination and multiple magnification levels.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=400&fit=crop",
    inStock: true,
    features: [
      "LED illumination",
      "4x, 10x, 40x, 100x objectives",
      "Coarse and fine focus",
      "Built-in rechargeable battery",
      "Carrying case included"
    ]
  },
  {
    id: "10",
    name: "Blood Glucose Test Strips (50pcs)",
    price: 3200,
    category: "Laboratory Supplies",
    description: "High-accuracy blood glucose test strips compatible with most glucose meters.",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop",
    inStock: true,
    features: [
      "High accuracy",
      "Small blood sample",
      "Fast results",
      "Long shelf life",
      "Individual foil packaging"
    ]
  },
  {
    id: "11",
    name: "Examination Couch",
    price: 32000,
    category: "Medical Equipment",
    description: "Adjustable examination couch with paper roll holder and comfortable padding.",
    image: "https://images.unsplash.com/photo-1576673442618-4e3b2206e9b6?w=400&h=400&fit=crop",
    inStock: true,
    features: [
      "Height adjustable",
      "Paper roll holder",
      "Easy-clean surface",
      "Stable base",
      "Comfortable padding"
    ]
  },
  {
    id: "12",
    name: "Latex Examination Gloves (100pcs)",
    price: 1250,
    category: "Disposables",
    description: "High-quality latex examination gloves with textured fingertips for better grip.",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400&h=400&fit=crop",
    inStock: true,
    features: [
      "Powder-free",
      "Textured fingertips",
      "Superior tactile sensitivity",
      "Ambidextrous",
      "CE marked"
    ]
  }
]