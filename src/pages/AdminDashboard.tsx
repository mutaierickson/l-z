import { useState } from "react"
import { Plus, Edit, Trash2, BarChart3, Users, Settings, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AdminSidebar } from "@/components/admin-sidebar"
import { PRODUCTS, CATEGORIES, Product } from "@/data/products"
import { useToast } from "@/hooks/use-toast"

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeSection, setActiveSection] = useState("products")
  const [products, setProducts] = useState<Product[]>(PRODUCTS)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "", price: 0, category: "", description: "", image: "", inStock: true
  })

  const handleSave = () => {
    if (editingProduct) {
      setProducts(prev => prev.map(p => p.id === editingProduct.id ? { ...formData, id: editingProduct.id } : p))
      toast({ title: "Product updated successfully" })
    } else {
      const newProduct = { ...formData, id: Date.now().toString() }
      setProducts(prev => [...prev, newProduct])
      toast({ title: "Product added successfully" })
    }
    setIsDialogOpen(false)
    resetForm()
  }

  const handleDelete = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id))
    toast({ title: "Product deleted successfully" })
  }

  const resetForm = () => {
    setFormData({ name: "", price: 0, category: "", description: "", image: "", inStock: true })
    setEditingProduct(null)
  }

  const openEditDialog = (product: Product) => {
    setEditingProduct(product)
    setFormData(product)
    setIsDialogOpen(true)
  }

  const renderContent = () => {
    switch (activeSection) {
      case "products":
        return renderProductsSection()
      case "orders":
        return renderOrdersSection()
      case "analytics":
        return renderAnalyticsSection()
      case "users":
        return renderUsersSection()
      case "settings":
        return renderSettingsSection()
      default:
        return renderProductsSection()
    }
  }

  const renderProductsSection = () => (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Products Management</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{editingProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Product Name" value={formData.name} 
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} />
              <Input type="number" placeholder="Price" value={formData.price} 
                onChange={(e) => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))} />
              <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                <SelectTrigger><SelectValue placeholder="Category" /></SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map(cat => <SelectItem key={cat} value={cat}>{cat}</SelectItem>)}
                </SelectContent>
              </Select>
              <Input placeholder="Image URL" value={formData.image} 
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))} />
            </div>
            <Textarea placeholder="Description" value={formData.description} 
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))} />
            <Button onClick={handleSave} className="w-full">Save Product</Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id}>
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <p className="font-bold text-primary">KSh {product.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={() => openEditDialog(product)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleDelete(product.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )

  const renderOrdersSection = () => (
    <div>
      <h1 className="text-3xl font-bold mb-8">Orders Management</h1>
      <Card>
        <CardContent className="p-8 text-center">
          <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Orders Coming Soon</h3>
          <p className="text-muted-foreground">Order management functionality will be available here.</p>
        </CardContent>
      </Card>
    </div>
  )

  const renderAnalyticsSection = () => (
    <div>
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      <Card>
        <CardContent className="p-8 text-center">
          <BarChart3 className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Analytics Coming Soon</h3>
          <p className="text-muted-foreground">Sales analytics and reports will be available here.</p>
        </CardContent>
      </Card>
    </div>
  )

  const renderUsersSection = () => (
    <div>
      <h1 className="text-3xl font-bold mb-8">Users Management</h1>
      <Card>
        <CardContent className="p-8 text-center">
          <Users className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">User Management Coming Soon</h3>
          <p className="text-muted-foreground">User accounts and permissions will be managed here.</p>
        </CardContent>
      </Card>
    </div>
  )

  const renderSettingsSection = () => (
    <div>
      <h1 className="text-3xl font-bold mb-8">System Settings</h1>
      <Card>
        <CardContent className="p-8 text-center">
          <Settings className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Settings Coming Soon</h3>
          <p className="text-muted-foreground">System configuration and preferences will be available here.</p>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          onLogout={onLogout}
        />
        
        <main className="flex-1">
          {/* Header with sidebar trigger */}
          <header className="h-12 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SidebarTrigger className="ml-4" />
            <div className="ml-4">
              <span className="text-sm text-muted-foreground">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Management
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}