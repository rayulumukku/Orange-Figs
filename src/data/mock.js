// Optimize Cloudinary URLs for faster loading (smaller size, auto format/quality)
export const cloudinaryOpt = (url, w = 800) =>
  url.replace('/image/upload/', `/image/upload/f_auto,q_auto,w_${w}/`);

export const galleryImages = [
  { id: 1, url: 'https://res.cloudinary.com/dehcbkqsf/image/upload/v1774613870/6M7A0145_fqpy2h.jpg', title: 'Young Bakers' },
  { id: 2, url: 'https://res.cloudinary.com/dehcbkqsf/image/upload/v1774613913/DSC04995_fiennw.jpg', title: 'Healthy Salads' },
  { id: 3, url: 'https://res.cloudinary.com/dehcbkqsf/image/upload/v1774613964/ADI09926_rsseqf.jpg', title: 'Pasta Making' },
  { id: 4, url: 'https://res.cloudinary.com/dehcbkqsf/image/upload/v1774614009/DSC05099_pp7ifm.jpg', title: 'Bread Workshop' },
  { id: 5, url: 'https://res.cloudinary.com/dehcbkqsf/image/upload/v1774614094/ADI09599_wmn9ka.jpg', title: 'Team Cooking' },
  { id: 6, url: 'https://res.cloudinary.com/dehcbkqsf/image/upload/v1774615071/6M7A6771_vlxunb.jpg', title: 'Chef Hat Graduation' },
  { id: 7, url: 'https://res.cloudinary.com/dehcbkqsf/image/upload/v1774614296/CL4A3464_s2y1nj.jpg', title: 'Baking Fun' },
  { id: 8, url: 'https://res.cloudinary.com/dehcbkqsf/image/upload/v1774614773/NAG05820_pk1wb7.jpg', title: 'Delicious Treats' },
  { id: 9, url: 'https://res.cloudinary.com/dehcbkqsf/image/upload/v1774614921/NAG05830_ai87np.jpg', title: 'Community Cooking' }
];

export const contactInfo = {
  email: 'hello@theculinarylounge.com',
  phone: '+91 90000 10770',
  address: 'Plot 15, Bharani Layout, Narne Road, Jublee Hills, Hyderabad, Telangana 500092',
  hours: 'Mon-Sat: 9am - 6pm'
};
