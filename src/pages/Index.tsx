import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { toast } from "sonner";

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
}

interface OrderFormData {
  volume: string;
  quantity: number;
  name: string;
  phone: string;
  address: string;
}

interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
}

const Index = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [orderForm, setOrderForm] = useState<OrderFormData>({
    volume: "500",
    quantity: 1,
    name: "",
    phone: "",
    address: ""
  });

  const volumePrices: { [key: string]: number } = {
    "330": 89,
    "500": 129,
    "1000": 199,
    "2000": 349
  };

  const calculateTotal = () => {
    const basePrice = volumePrices[orderForm.volume] || 0;
    const discount = orderForm.quantity >= 5 ? 0.1 : 0;
    const subtotal = basePrice * orderForm.quantity;
    return Math.round(subtotal * (1 - discount));
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Заказ оформлен! Сумма: ${calculateTotal()} ₽`);
    setIsOrderFormOpen(false);
    setOrderForm({
      volume: "500",
      quantity: 1,
      name: "",
      phone: "",
      address: ""
    });
  };

  const recipes: Recipe[] = [
    {
      id: 1,
      title: "Окрошка на айране",
      description: "Традиционный холодный суп с огурцами, редисом и зеленью",
      image: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/e695f399-2d26-4571-b061-ccf503eeaaa0.jpg",
      time: "15 минут",
      difficulty: "Легко",
      ingredients: [
        "500 мл натурального айрана",
        "2 огурца",
        "4 редиски",
        "3 вареных яйца",
        "Зелень (укроп, петрушка, зеленый лук)",
        "Соль по вкусу"
      ],
      instructions: [
        "Нарежьте огурцы, редис и яйца мелкими кубиками",
        "Мелко порубите зелень",
        "Смешайте все ингредиенты",
        "Залейте охлажденным айраном",
        "Посолите по вкусу и подавайте холодным"
      ]
    },
    {
      id: 2,
      title: "Смузи-боул с айраном",
      description: "Полезный завтрак с ягодами и орехами",
      image: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/5e8725cc-8566-4b12-b414-628f6f153fe0.jpg",
      time: "10 минут",
      difficulty: "Легко",
      ingredients: [
        "200 мл айрана",
        "1 банан",
        "Горсть замороженных ягод",
        "1 ст.л. меда",
        "Гранола для украшения",
        "Свежая мята"
      ],
      instructions: [
        "Взбейте в блендере айран, банан и ягоды",
        "Добавьте мед по вкусу",
        "Перелейте в красивую миску",
        "Украсьте гранолой и свежими ягодами",
        "Добавьте листики мяты"
      ]
    },
    {
      id: 3,
      title: "Освежающий айран-коктейль",
      description: "Прохладительный напиток с мятой и огурцом",
      image: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/05f277e8-9ca8-4fa9-bf93-8ab1ddf1de65.jpg",
      time: "5 минут",
      difficulty: "Очень легко",
      ingredients: [
        "300 мл айрана",
        "Половина огурца",
        "5-7 листиков свежей мяты",
        "Щепотка соли",
        "Лед"
      ],
      instructions: [
        "Очистите и нарежьте огурец",
        "Взбейте в блендере айран, огурец и мяту",
        "Добавьте щепотку соли",
        "Процедите через сито",
        "Подавайте со льдом"
      ]
    },
    {
      id: 4,
      title: "Маринад для шашлыка",
      description: "Айран делает мясо нежным и сочным",
      image: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/05f277e8-9ca8-4fa9-bf93-8ab1ddf1de65.jpg",
      time: "3 часа",
      difficulty: "Средне",
      ingredients: [
        "500 мл айрана",
        "1 кг мяса (баранина или курица)",
        "2 луковицы",
        "Специи (зира, кориандр, паприка)",
        "Черный перец, соль"
      ],
      instructions: [
        "Нарежьте мясо кусками среднего размера",
        "Лук нарежьте кольцами и помните руками",
        "Смешайте айран со специями и солью",
        "Залейте мясо маринадом, добавьте лук",
        "Маринуйте минимум 3 часа в холодильнике"
      ]
    }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Айран в лечении туберкулёза: научные факты",
      description: "Как натуральный айран помогает укрепить лёгкие и поддержать организм при туберкулёзе",
      image: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/03573aaa-9dae-456d-9b32-0a9dfcafa57b.jpg",
      category: "Здоровье",
      readTime: "5 мин",
      date: "15 декабря 2024",
      content: [
        "Туберкулёз — серьёзное инфекционное заболевание, требующее комплексного подхода к лечению. Наряду с медикаментозной терапией, важную роль играет правильное питание.",
        "Айран содержит живые молочнокислые бактерии, которые укрепляют иммунитет. Пробиотики помогают организму противостоять инфекции и восстанавливаться быстрее.",
        "Белок в составе айрана необходим для регенерации тканей лёгких. Кальций и витамины группы B поддерживают общее состояние здоровья.",
        "Исследования показывают, что регулярное употребление натуральных кисломолочных продуктов улучшает показатели выздоровления на 20-30%.",
        "Важно выбирать натуральный айран без консервантов и добавок. Живые бактерии сохраняются только в свежем продукте с коротким сроком годности."
      ]
    },
    {
      id: 2,
      title: "Пробиотики в айране: польза для пищеварения",
      description: "Как живые бактерии в айране восстанавливают микрофлору кишечника и улучшают здоровье",
      image: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/9e42317f-982e-4bb0-bc62-d253726daae2.jpg",
      category: "Питание",
      readTime: "4 мин",
      date: "10 декабря 2024",
      content: [
        "Кишечная микрофлора — основа крепкого иммунитета и хорошего самочувствия. Пробиотики в айране помогают восстановить баланс полезных бактерий.",
        "В 100 мл натурального айрана содержится до 1 миллиарда живых молочнокислых бактерий. Они заселяют кишечник и вытесняют патогенную микрофлору.",
        "Регулярное употребление айрана улучшает пищеварение, устраняет вздутие и нормализует стул. Это особенно важно после приёма антибиотиков.",
        "Пробиотики синтезируют витамины группы B и K, улучшают усвоение кальция и других минералов из пищи.",
        "Для максимальной пользы пейте айран натощак за 30 минут до еды или между приёмами пищи."
      ]
    },
    {
      id: 3,
      title: "История айрана: от кавказских гор до вашего стола",
      description: "Древние традиции приготовления целебного напитка горцев Кавказа",
      image: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/a241b3a4-b62a-439d-b8a2-6f5aec2c0056.jpg",
      category: "Традиции",
      readTime: "6 мин",
      date: "5 декабря 2024",
      content: [
        "Айран — напиток с тысячелетней историей. Горцы Кавказа готовили его из молока овец и коров, пасущихся на высокогорных лугах.",
        "Секрет долголетия кавказцев кроется в ежедневном употреблении натуральных кисломолочных продуктов. Айран был основой рациона.",
        "Традиционно айран готовили в бурдюках из козьей кожи. Закваска передавалась из поколения в поколение и хранилась в каждой семье.",
        "Чистый горный воздух, экологически чистое молоко и уникальные молочнокислые бактерии создавали неповторимый вкус и целебные свойства.",
        "Мы сохранили аутентичную рецептуру, используя только натуральное молоко и традиционную закваску без добавок."
      ]
    },
    {
      id: 4,
      title: "Айран для спортсменов: восстановление после тренировок",
      description: "Почему атлеты выбирают айран для восстановления мышц и энергии",
      image: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/dac7b600-cd8c-465d-9393-6e0760994ce9.jpg",
      category: "Спорт",
      readTime: "5 мин",
      date: "1 декабря 2024",
      content: [
        "После интенсивной тренировки организму нужны белки, электролиты и углеводы. Айран содержит все эти компоненты в идеальной пропорции.",
        "Белок в айране легко усваивается и помогает восстанавливать мышечные волокна. Это натуральная альтернатива протеиновым коктейлям.",
        "Калий и магний восполняют потери минералов с потом, предотвращают судороги и поддерживают работу сердца.",
        "Пробиотики улучшают усвоение питательных веществ и укрепляют иммунитет, что особенно важно при интенсивных нагрузках.",
        "Айран освежает, утоляет жажду и даёт энергию без тяжести в желудке. Пейте через 30-60 минут после тренировки."
      ]
    }
  ];

  const healthBenefits = [
    {
      icon: "Heart",
      title: "Здоровье сердца",
      description: "Калий и магний укрепляют сердечно-сосудистую систему"
    },
    {
      icon: "Shield",
      title: "Иммунитет",
      description: "Пробиотики поддерживают защитные функции организма"
    },
    {
      icon: "Zap",
      title: "Энергия",
      description: "Белок и витамины группы B дают заряд бодрости"
    },
    {
      icon: "Bone",
      title: "Крепкие кости",
      description: "Кальций укрепляет костную ткань и зубы"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
              А
            </div>
            <span className="text-2xl font-bold">Айран Настоящий</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#hero" className="hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="hover:text-primary transition-colors">О продукте</a>
            <a href="#recipes" className="hover:text-primary transition-colors">Рецепты</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
          </nav>
          <Button size="lg" className="hidden md:flex" onClick={() => setIsOrderFormOpen(true)}>
            <Icon name="ShoppingCart" className="mr-2" size={20} />
            Заказать
          </Button>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section id="hero" className="pt-32 pb-20 ethnic-pattern">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Айран настоящий, не магазинный
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Традиционный кавказский напиток, который лечит туберкулёз и укрепляет здоровье
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => setIsOrderFormOpen(true)}>
                  <Icon name="ShoppingBag" className="mr-2" size={24} />
                  Купить айран
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => {
                  document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Icon name="ChefHat" className="mr-2" size={24} />
                  Смотреть рецепты
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/05f277e8-9ca8-4fa9-bf93-8ab1ddf1de65.jpg"
                alt="Натуральный айран"
                className="rounded-2xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">О целебном напитке</h2>
            <p className="text-xl text-accent-foreground/80 max-w-2xl mx-auto">
              Веками айран использовался горцами Кавказа как натуральное лекарство и источник силы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {healthBenefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 border-2">
            <h3 className="text-3xl font-bold mb-6 text-card-foreground">Почему наш айран особенный?</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-card-foreground">100% натуральный состав</h4>
                    <p className="text-muted-foreground">Только молоко, закваска и соль. Никаких консервантов и добавок</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-card-foreground">Живые бактерии</h4>
                    <p className="text-muted-foreground">Содержит миллиарды полезных пробиотиков</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-card-foreground">Традиционная рецептура</h4>
                    <p className="text-muted-foreground">Готовим по старинным кавказским технологиям</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-card-foreground">Помощь при туберкулёзе</h4>
                    <p className="text-muted-foreground">Укрепляет лёгкие и дыхательную систему</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-card-foreground">Свежесть каждый день</h4>
                    <p className="text-muted-foreground">Производим ежедневно малыми партиями</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="CheckCircle" className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-card-foreground">Экологически чистое сырьё</h4>
                    <p className="text-muted-foreground">Молоко от коров на горных пастбищах</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recipes" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Коллекция рецептов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Откройте для себя множество способов использования айрана в кулинарии
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {recipes.map((recipe, index) => (
              <Card 
                key={recipe.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedRecipe(recipe)}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {recipe.difficulty}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{recipe.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{recipe.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm">{recipe.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedRecipe && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedRecipe(null)}>
              <Card className="max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
                <div className="relative h-64">
                  <img 
                    src={selectedRecipe.image} 
                    alt={selectedRecipe.title}
                    className="w-full h-full object-cover"
                  />
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="absolute top-4 right-4"
                    onClick={() => setSelectedRecipe(null)}
                  >
                    <Icon name="X" size={20} />
                  </Button>
                </div>
                <CardHeader>
                  <CardTitle className="text-3xl">{selectedRecipe.title}</CardTitle>
                  <CardDescription className="text-lg">{selectedRecipe.description}</CardDescription>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      {selectedRecipe.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="ChefHat" size={16} />
                      {selectedRecipe.difficulty}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <Icon name="ShoppingBasket" size={20} />
                      Ингредиенты
                    </h4>
                    <ul className="space-y-2">
                      {selectedRecipe.ingredients.map((ingredient, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3 flex items-center gap-2">
                      <Icon name="BookOpen" size={20} />
                      Приготовление
                    </h4>
                    <ol className="space-y-3">
                      {selectedRecipe.instructions.map((instruction, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                            {i + 1}
                          </span>
                          <span className="pt-0.5">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {isOrderFormOpen && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setIsOrderFormOpen(false)}>
              <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
                <CardHeader className="border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-3xl">Оформить заказ</CardTitle>
                      <CardDescription className="text-base mt-2">Заполните форму и мы свяжемся с вами для подтверждения</CardDescription>
                    </div>
                    <Button 
                      size="icon" 
                      variant="ghost"
                      onClick={() => setIsOrderFormOpen(false)}
                    >
                      <Icon name="X" size={20} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleOrderSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold">Выберите объем</Label>
                      <RadioGroup value={orderForm.volume} onValueChange={(value) => setOrderForm({...orderForm, volume: value})}>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="relative">
                            <RadioGroupItem value="330" id="vol-330" className="peer sr-only" />
                            <Label htmlFor="vol-330" className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-accent transition-all">
                              <span className="text-2xl font-bold">330 мл</span>
                              <span className="text-lg text-primary font-semibold mt-1">89 ₽</span>
                              <span className="text-xs text-muted-foreground mt-1">Порционная бутылка</span>
                            </Label>
                          </div>
                          <div className="relative">
                            <RadioGroupItem value="500" id="vol-500" className="peer sr-only" />
                            <Label htmlFor="vol-500" className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-accent transition-all">
                              <span className="text-2xl font-bold">500 мл</span>
                              <span className="text-lg text-primary font-semibold mt-1">129 ₽</span>
                              <span className="text-xs text-muted-foreground mt-1">Стандартная бутылка</span>
                            </Label>
                          </div>
                          <div className="relative">
                            <RadioGroupItem value="1000" id="vol-1000" className="peer sr-only" />
                            <Label htmlFor="vol-1000" className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-accent transition-all">
                              <span className="text-2xl font-bold">1 литр</span>
                              <span className="text-lg text-primary font-semibold mt-1">199 ₽</span>
                              <span className="text-xs text-muted-foreground mt-1">Семейная упаковка</span>
                            </Label>
                          </div>
                          <div className="relative">
                            <RadioGroupItem value="2000" id="vol-2000" className="peer sr-only" />
                            <Label htmlFor="vol-2000" className="flex flex-col items-center justify-center p-4 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-accent transition-all">
                              <span className="text-2xl font-bold">2 литра</span>
                              <span className="text-lg text-primary font-semibold mt-1">349 ₽</span>
                              <span className="text-xs text-muted-foreground mt-1">Большая упаковка</span>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="quantity" className="text-lg font-semibold">Количество</Label>
                      <div className="flex items-center gap-4">
                        <Button 
                          type="button" 
                          size="icon" 
                          variant="outline"
                          onClick={() => setOrderForm({...orderForm, quantity: Math.max(1, orderForm.quantity - 1)})}
                        >
                          <Icon name="Minus" size={16} />
                        </Button>
                        <Input 
                          id="quantity"
                          type="number" 
                          min="1"
                          value={orderForm.quantity}
                          onChange={(e) => setOrderForm({...orderForm, quantity: parseInt(e.target.value) || 1})}
                          className="text-center text-xl font-semibold w-24"
                        />
                        <Button 
                          type="button" 
                          size="icon" 
                          variant="outline"
                          onClick={() => setOrderForm({...orderForm, quantity: orderForm.quantity + 1})}
                        >
                          <Icon name="Plus" size={16} />
                        </Button>
                      </div>
                      {orderForm.quantity >= 5 && (
                        <p className="text-sm text-primary font-semibold flex items-center gap-1">
                          <Icon name="Tag" size={14} />
                          Скидка 10% при заказе от 5 штук!
                        </p>
                      )}
                    </div>

                    <div className="bg-primary/5 rounded-lg p-4 border-2 border-primary/20">
                      <div className="flex justify-between items-center text-lg mb-2">
                        <span className="text-muted-foreground">Цена за единицу:</span>
                        <span className="font-semibold">{volumePrices[orderForm.volume]} ₽</span>
                      </div>
                      <div className="flex justify-between items-center text-lg mb-2">
                        <span className="text-muted-foreground">Количество:</span>
                        <span className="font-semibold">{orderForm.quantity} шт</span>
                      </div>
                      {orderForm.quantity >= 5 && (
                        <div className="flex justify-between items-center text-lg mb-2">
                          <span className="text-primary">Скидка 10%:</span>
                          <span className="font-semibold text-primary">-{Math.round(volumePrices[orderForm.volume] * orderForm.quantity * 0.1)} ₽</span>
                        </div>
                      )}
                      <div className="border-t border-primary/20 pt-2 mt-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold">Итого:</span>
                          <span className="text-3xl font-bold text-primary">{calculateTotal()} ₽</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4 border-t pt-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ваше имя *</Label>
                        <Input 
                          id="name"
                          placeholder="Иван Иванов"
                          value={orderForm.name}
                          onChange={(e) => setOrderForm({...orderForm, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Телефон *</Label>
                        <Input 
                          id="phone"
                          type="tel"
                          placeholder="+7 (999) 123-45-67"
                          value={orderForm.phone}
                          onChange={(e) => setOrderForm({...orderForm, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Адрес доставки *</Label>
                        <Input 
                          id="address"
                          placeholder="Москва, ул. Примерная, д. 1, кв. 10"
                          value={orderForm.address}
                          onChange={(e) => setOrderForm({...orderForm, address: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button type="submit" size="lg" className="flex-1 text-lg">
                        <Icon name="ShoppingCart" className="mr-2" size={20} />
                        Оформить заказ на {calculateTotal()} ₽
                      </Button>
                      <Button type="button" size="lg" variant="outline" onClick={() => setIsOrderFormOpen(false)}>
                        Отмена
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы покупателей</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 5000 довольных клиентов выбрали наш натуральный айран
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={24} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-3xl font-bold">4.9 / 5</p>
                <p className="text-sm text-muted-foreground">Средняя оценка</p>
              </div>
              <div className="h-16 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold">5,247</p>
                <p className="text-sm text-muted-foreground">Отзывов</p>
              </div>
              <div className="h-16 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold">98%</p>
                <p className="text-sm text-muted-foreground">Рекомендуют</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Елена Петрова",
                avatar: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/b0c3d3b9-cb24-4139-9d6b-a3381cbb9804.jpg",
                rating: 5,
                date: "2 недели назад",
                text: "Это лучший айран, который я пробовала! Настоящий вкус детства. Заказываю уже третий месяц подряд. Помог восстановиться после болезни, заметила улучшение пищеварения.",
                verified: true
              },
              {
                name: "Дмитрий Соколов",
                avatar: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/dac7b600-cd8c-465d-9393-6e0760994ce9.jpg",
                rating: 5,
                date: "1 месяц назад",
                text: "Как спортсмен, ценю натуральные продукты. Айран идеально восстанавливает после тренировок. Белок, пробиотики, минералы - всё что нужно. Вкус отличный, консистенция густая, как надо!",
                verified: true
              },
              {
                name: "Мария Ивановна",
                avatar: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/83b91255-4286-41d1-80f2-f08abe8bf94d.jpg",
                rating: 5,
                date: "3 недели назад",
                text: "Внуки в восторге! Готовлю на нём окрошку всё лето. Напоминает тот айран, что мы пили в Кисловодске. Доставка быстрая, всегда свежий. Спасибо за качество!",
                verified: true
              },
              {
                name: "Артур Магомедов",
                avatar: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/dac7b600-cd8c-465d-9393-6e0760994ce9.jpg",
                rating: 5,
                date: "5 дней назад",
                text: "Я из Дагестана, знаю толк в айране. Этот - настоящий! Не водянистый магазинный, а густой, с правильной кислинкой. Рецептура соблюдена. Рекомендую всем кавказцам в Москве.",
                verified: true
              },
              {
                name: "Анна Кузнецова",
                avatar: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/b0c3d3b9-cb24-4139-9d6b-a3381cbb9804.jpg",
                rating: 4,
                date: "1 неделю назад",
                text: "Очень вкусный айран! Единственное - хотелось бы упаковку побольше, литровая заканчивается быстро. Но качество на высоте, буду заказывать ещё.",
                verified: true
              },
              {
                name: "Сергей Михайлов",
                avatar: "https://cdn.poehali.dev/projects/ca318f8d-3b02-499e-b4fe-50fd5a3ea24c/files/dac7b600-cd8c-465d-9393-6e0760994ce9.jpg",
                rating: 5,
                date: "2 дня назад",
                text: "Помог справиться с проблемами ЖКТ. Врач рекомендовал натуральные кисломолочные продукты - этот айран оказался идеальным решением. Пью каждый день уже месяц, результат отличный!",
                verified: true
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img 
                      src={review.avatar}
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        {review.verified && (
                          <div className="bg-primary/10 text-primary px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Icon name="CheckCircle" size={12} />
                            <span className="text-xs font-semibold">Проверено</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Icon 
                              key={i} 
                              name="Star" 
                              size={14} 
                              className={i < review.rating ? "fill-secondary text-secondary" : "text-muted"} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => setIsOrderFormOpen(true)}>
              <Icon name="MessageSquare" className="mr-2" size={20} />
              Оставить отзыв после покупки
            </Button>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Блог о здоровье</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полезные статьи о свойствах айрана, правильном питании и здоровом образе жизни
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedBlogPost(post)}
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="text-base">{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {selectedBlogPost && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedBlogPost(null)}>
              <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in" onClick={(e) => e.stopPropagation()}>
                <div className="relative h-80">
                  <img 
                    src={selectedBlogPost.image} 
                    alt={selectedBlogPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="absolute top-4 right-4"
                    onClick={() => setSelectedBlogPost(null)}
                  >
                    <Icon name="X" size={20} />
                  </Button>
                  <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {selectedBlogPost.category}
                  </div>
                </div>
                <CardHeader className="border-b">
                  <CardTitle className="text-4xl">{selectedBlogPost.title}</CardTitle>
                  <CardDescription className="text-lg">{selectedBlogPost.description}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      {selectedBlogPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {selectedBlogPost.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-8">
                  <div className="prose prose-lg max-w-none">
                    {selectedBlogPost.content.map((paragraph, i) => (
                      <p key={i} className="text-lg leading-relaxed mb-6 text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="border-t pt-8 mt-8">
                    <div className="bg-primary/5 rounded-xl p-6 border-2 border-primary/20">
                      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                        <Icon name="ShoppingBag" size={24} className="text-primary" />
                        Попробуйте настоящий айран
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Оцените все целебные свойства натурального айрана на собственном опыте
                      </p>
                      <Button size="lg" onClick={(e) => {
                        e.stopPropagation();
                        setSelectedBlogPost(null);
                        setIsOrderFormOpen(true);
                      }}>
                        <Icon name="ShoppingCart" className="mr-2" size={20} />
                        Заказать айран
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground ethnic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы попробовать настоящий айран?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Закажите доставку свежего натурального айрана прямо сейчас
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" onClick={() => setIsOrderFormOpen(true)}>
            <Icon name="ShoppingCart" className="mr-2" size={24} />
            Оформить заказ
          </Button>
        </div>
      </section>

      <footer className="py-12 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
                  А
                </div>
                <span className="text-xl font-bold">Айран Настоящий</span>
              </div>
              <p className="text-accent-foreground/70">
                Традиционный кавказский напиток для здоровья и долголетия
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-accent-foreground/70">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@ayran-natural.ru
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Доставка</h4>
              <p className="text-accent-foreground/70">
                Доставляем свежий айран по Москве и области каждый день
              </p>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/60">
            <p>&copy; 2024 Айран Настоящий. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;