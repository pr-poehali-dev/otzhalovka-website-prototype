import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      icon: 'Home',
      title: 'Уютные домики',
      description: 'Комфортабельные деревянные домики с панорамными окнами и всеми удобствами'
    },
    {
      icon: 'UtensilsCrossed',
      title: 'Питание',
      description: 'Русская кухня, мангальные зоны, оборудованные беседки для барбекю'
    },
    {
      icon: 'Wifi',
      title: 'Wi-Fi',
      description: 'Высокоскоростной интернет на всей территории базы отдыха'
    },
    {
      icon: 'Waves',
      title: 'Баня и SPA',
      description: 'Традиционная русская баня на берегу озера, массажные процедуры'
    }
  ];

  const activities = [
    {
      icon: 'Bike',
      title: 'Велопрогулки',
      description: 'Прокат велосипедов, живописные маршруты по лесу'
    },
    {
      icon: 'Fish',
      title: 'Рыбалка',
      description: 'Оборудованные места для рыбалки, прокат снастей'
    },
    {
      icon: 'TreePine',
      title: 'Пешие прогулки',
      description: 'Экотропы, маршруты разной сложности, гид по заповеднику'
    },
    {
      icon: 'Flame',
      title: 'Костер',
      description: 'Оборудованные кострища, дрова, зона для пикников'
    },
    {
      icon: 'Volleyball',
      title: 'Спорт',
      description: 'Волейбольная площадка, настольный теннис, бадминтон'
    },
    {
      icon: 'Camera',
      title: 'Фототуры',
      description: 'Экскурсии с фотографом по самым красивым местам'
    }
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/08315779-988d-492b-986f-2c20a8598d55/files/6d611dd3-fb17-4635-a4dc-25ec59cae6c5.jpg',
      title: 'Уютные домики'
    },
    {
      url: 'https://cdn.poehali.dev/projects/08315779-988d-492b-986f-2c20a8598d55/files/6c423b29-f0cb-474a-9355-afd7450cdc0f.jpg',
      title: 'Озеро на закате'
    },
    {
      url: 'https://cdn.poehali.dev/projects/08315779-988d-492b-986f-2c20a8598d55/files/3676ad78-5b0a-4fe1-9af4-22613a344e6d.jpg',
      title: 'Зона отдыха'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Отжаловка</h1>
          <div className="hidden md:flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#activities" className="hover:text-primary transition-colors">Развлечения</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Забронировать</Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            База отдыха Отжаловка
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Отдохните от городской суеты в окружении природы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Забронировать номер
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="activities" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Развлечения</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Активный отдых на любой вкус</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <CardContent className="pt-6 pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 transition-colors">
                      <Icon name={activity.icon} className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                      <p className="text-muted-foreground text-sm">{activity.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Фотогалерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Наша территория и природа</p>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer animate-scale-in shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-lg p-6">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  Как добраться
                </h3>
                <p className="text-muted-foreground mb-4">
                  Московская область, Рузский район<br />
                  село Отжаловка
                </p>
                <p className="text-sm text-muted-foreground">
                  120 км от МКАД по Минскому шоссе
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="pt-8 pb-8">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Icon name="Phone" className="text-secondary" size={24} />
                  Связь
                </h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <Icon name="Phone" size={18} className="text-muted-foreground" />
                    <a href="tel:+79991234567" className="hover:text-primary transition-colors">
                      +7 (999) 123-45-67
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Mail" size={18} className="text-muted-foreground" />
                    <a href="mailto:info@otjalovka.ru" className="hover:text-primary transition-colors">
                      info@otjalovka.ru
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 bg-gradient-to-r from-primary to-secondary text-white animate-scale-in">
            <CardContent className="py-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Готовы к отдыху?</h3>
              <p className="mb-6 text-white/90">Забронируйте номер прямо сейчас и получите скидку 10%</p>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Забронировать со скидкой
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm opacity-80">© 2024 База отдыха Отжаловка. Все права защищены.</p>
        </div>
      </footer>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Увеличенное фото"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <button 
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <Icon name="X" size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
