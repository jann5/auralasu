import type { ProductModel } from '@/lib/types';

// ============================================
// 5 MODELI FRONTÓW AuraLasu
// ============================================

export const MODELS: ProductModel[] = [
    {
        id: 'wisla',
        name: 'Model Calm',
        code: 'CLM',
        description: 'Pionowe, luksusowe frezowanie nadające wnętrzu rytm i elegancję. Minimalistyczna forma w najwyższym standardzie wykonania.',
        features: [
            'Pionowe frezowanie o miękkim rysunku',
            'Grubość 22mm',
            'Spokojna, minimalistyczna geometria',
            'Wykończenie: olej naturalny lub lakier mat'
        ],
        image: '/images/zdjecia-safe/calm_dab_naturalny.png',
        images: [
            '/images/zdjecia-safe/calm_dab_naturalny.png',
            '/images/zdjecia-safe/calm_dab_wedzony.png',
            '/images/zdjecia-safe/calm_jesion_jasny.png',
            '/images/zdjecia-safe/calm_jesion_smolowany.png'
        ],
        basePrice: 570
    },
    {
        id: 'bieszczady',
        name: 'Model Facet',
        code: 'FCT',
        description: 'Głębokie, fasetowe frezowanie CNC tworzące trójwymiarową rzeźbę na frontach. Wyjątkowa gra światła i cienia.',
        features: [
            'Fasetowe frezowanie CNC',
            'Grubość 22mm',
            'Mocny efekt trójwymiaru',
            'Wyrazisty charakter kolekcji'
        ],
        image: '/images/zdjecia-safe/facet_dab_wedzony.png',
        images: [
            '/images/zdjecia-safe/facet_dab_wedzony.png',
            '/images/zdjecia-safe/facet_jesion_jasny.png',
            '/images/zdjecia-safe/facet_jesion_smolowany.png'
        ],
        basePrice: 640
    },
    {
        id: 'tatry',
        name: 'Model Soft',
        code: 'SFT',
        description: 'Miękkie, płynne fale rzeźbione w drewnie. Organiczna forma, która wprowadza spokój i naturalną harmonię.',
        features: [
            'Organiczne, płynne frezowanie',
            'Grubość 22mm',
            'Subtelna gra światła',
            'Naturalny, łagodny charakter'
        ],
        image: '/images/zdjecia-safe/soft_dab_naturalny.jpg',
        images: [
            '/images/zdjecia-safe/soft_dab_naturalny.jpg',
            '/images/zdjecia-safe/soft_dab_wedzony.jpg',
            '/images/zdjecia-safe/soft_jesion_jasny.png',
            '/images/zdjecia-safe/soft_jesion_smolowany.png'
        ],
        basePrice: 600
    },
    {
        id: 'karpaty',
        name: 'Model Rhythm',
        code: 'RHY',
        description: 'Wizualnie wyrazisty, ale uporządkowany front oparty na powtarzalnym rytmie pionowych segmentów o lekko zróżnicowanej szerokości. Trójwymiarowość bez przesady.',
        features: [
            'Rytmiczne pionowe podziały',
            'Grubość 22mm',
            'Wyważony efekt 3D',
            'Nowoczesna kompozycja frontu'
        ],
        image: '/images/zdjecia-safe/rhythm_jesion_jasny.png',
        images: [
            '/images/zdjecia-safe/rhythm_jesion_jasny.png'
        ],
        basePrice: 610
    },
    {
        id: 'sudety',
        name: 'Model Geo',
        code: 'GEO',
        description: 'Estetyka inspirowana współczesną architekturą. Powierzchnie podzielone geometrycznie budują precyzyjny, nowoczesny charakter frontu.',
        features: [
            'Geometryczne podziały powierzchni',
            'Grubość 24mm',
            'Nowoczesna, architektoniczna forma',
            'Czytelna struktura i porządek'
        ],
        image: '/images/zdjecia-safe/geo_dab_naturalny.png',
        images: [
            '/images/zdjecia-safe/geo_dab_naturalny.png'
        ],
        basePrice: 630
    }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getModelById(id: string): ProductModel | undefined {
    return MODELS.find(model => model.id === id);
}

export function getModelByCode(code: string): ProductModel | undefined {
    return MODELS.find(model => model.code === code);
}
