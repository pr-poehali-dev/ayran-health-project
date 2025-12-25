import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

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

const Index = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

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
          </nav>
          <Button size="lg" className="hidden md:flex">
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
                <Button size="lg" className="text-lg px-8">
                  <Icon name="ShoppingBag" className="mr-2" size={24} />
                  Купить айран
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
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
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground ethnic-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Готовы попробовать настоящий айран?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Закажите доставку свежего натурального айрана прямо сейчас
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
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
