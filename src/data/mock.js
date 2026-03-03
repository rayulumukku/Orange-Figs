export const stats = [
    { number: 1200, suffix: '+', label: 'Happy Students' },
    { number: 20, suffix: '+', label: 'Master Chefs' },
    { number: 50, suffix: '+', label: 'Cooking Workshops' },
    { number: 100, suffix: '%', label: 'Fun Guaranteed' }
];

export const classesData = [
    {
        id: 1,
        ageRange: '4-6',
        title: 'Little Chefs Foundation',
        subtitle: 'The Journey Begins',
        duration: '60 min',
        maxStudents: '8',
        description: 'A playful introduction to kitchen basics and simple, healthy recipes.',
        features: ['Kitchen Safety', 'Fruit & Veggie Art', 'Simple Mixing'],
        price: '45',
        color: '#FCAB52'
    },
    {
        id: 2,
        ageRange: '7-12',
        title: 'Junior Culinary Arts',
        subtitle: 'Skill Building',
        duration: '90 min',
        maxStudents: '10',
        description: 'Developing techniques in chopping, sautéing, and flavor profiling.',
        features: ['Knife Skills', 'Sauce Making', 'Baking Basics'],
        price: '60',
        color: '#EA580C'
    },
    {
        id: 3,
        ageRange: '13-17',
        title: 'Teen Masterclass',
        subtitle: 'Advanced Techniques',
        duration: '120 min',
        maxStudents: '14',
        description: 'Complex recipes and plating techniques for the aspiring chef.',
        features: ['Pastry Arts', 'International Cuisine', 'Food Styling'],
        price: '75',
        color: '#C2410C'
    }
];

export const testimonials = [
    {
        id: 1,
        name: 'Sara Johnson',
        role: 'Parent of Leo (6)',
        content: 'Orange Figs has completely changed how my son views vegetables. He now loves to help me prep dinner! The level of instruction is professional yet perfectly tailored for young kids.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
        rating: 5
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Parent of Maya (10)',
        content: 'The Junior Culinary Arts program is fantastic. Maya has learned real techniques—knife work, flavor balancing, and kitchen safety. It’s the highlight of her week!',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
        rating: 5
    },
    {
        id: 3,
        name: 'Elena Rodriguez',
        role: 'Parent of David (12)',
        content: 'I am so impressed with the attention to detail. Not only do they learn to cook, but they also learn about the culture and history behind the food. Truly world-class.',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
        rating: 5
    }
];

export const whyChooseUs = [
    {
        id: 1,
        title: 'Expert Instructors',
        description: 'Guided by Michelin-experienced chefs who specialize in child development.',
        icon: 'UserCheck',
        color: '#FCAB52'
    },
    {
        id: 2,
        title: 'Safety First',
        description: 'State-of-the-art kitchen with induction heating and kid-specific safety tools.',
        icon: 'ShieldCheck',
        color: '#EA580C'
    },
    {
        id: 3,
        title: 'Healthy Habits',
        description: 'Cultivating a lifelong appreciation for fresh, whole ingredients and balanced meals.',
        icon: 'HeartPulse',
        color: '#FA4A38'
    }
];

export const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80', title: 'Young Bakers' },
    { id: 2, url: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&q=80', title: 'Healthy Salads' },
    { id: 3, url: 'https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?auto=format&fit=crop&q=80', title: 'Pasta Making' },
    { id: 4, url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80', title: 'Bread Workshop' },
    { id: 5, url: 'https://images.unsplash.com/photo-1551218808-94e220e03107?auto=format&fit=crop&q=80', title: 'Team Cooking' },
    { id: 6, url: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80', title: 'Chef Hat Graduation' }
];

export const contactInfo = {
    email: 'hello@orangefigs.com',
    phone: '+1 (555) 000-0000',
    address: '123 Culinary Lane, Foodie Town, FT 54321',
    hours: 'Mon-Sat: 9am - 6pm'
};

export const scheduleData = [
    {
        day: 'Monday',
        sessions: [
            { id: 1, time: '3:30 PM - 4:30 PM', class: 'Little Chefs Foundation' },
            { id: 2, time: '5:00 PM - 6:30 PM', class: 'Junior Culinary Arts' }
        ]
    },
    {
        day: 'Wednesday',
        sessions: [
            { id: 3, time: '3:30 PM - 4:30 PM', class: 'Little Chefs Foundation' },
            { id: 4, time: '5:00 PM - 6:30 PM', class: 'Junior Culinary Arts' }
        ]
    },
    {
        day: 'Saturday',
        sessions: [
            { id: 5, time: '10:00 AM - 12:00 PM', class: 'Teen Masterclass' },
            { id: 6, time: '1:00 PM - 2:30 PM', class: 'Junior Culinary Arts' }
        ]
    }
];
