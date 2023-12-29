const arrayCard = [ 
    { number: 1 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540794/futbol/024cc731-73d1-4148-b711-57ce84ff8423_source-aspect-ratio_default_1060638_siypgr.webp" , view: 'hidden' , disable: false , par: 1},
    { number: 2 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540794/futbol/024cc731-73d1-4148-b711-57ce84ff8423_source-aspect-ratio_default_1060638_siypgr.webp" , view: 'hidden' , disable: false , par: 1},
    { number: 3 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540568/futbol/cce1e7be-34b0-4f55-86c6-76eee69fde17_source-aspect-ratio_default_1060691_mogk0l.webp" , view: 'hidden' , disable: false , par: 2},
    { number: 4 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540568/futbol/cce1e7be-34b0-4f55-86c6-76eee69fde17_source-aspect-ratio_default_1060691_mogk0l.webp" , view: 'hidden' , disable: false , par: 2},
    { number: 5 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540802/futbol/71bbab87-68c4-4835-b471-3dee76dd9aff_source-aspect-ratio_default_1060672_klsiuh.webp" , view: 'hidden' , disable: false , par: 3},
    { number: 6 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540802/futbol/71bbab87-68c4-4835-b471-3dee76dd9aff_source-aspect-ratio_default_1060672_klsiuh.webp" , view: 'hidden' , disable: false , par: 3},
    { number: 7 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540806/futbol/99e52be0-f9b4-4159-a37b-cc302b17bf71_source-aspect-ratio_default_1060681_kynmiz.webp" , view: 'hidden' , disable: false , par: 4},
    { number: 8 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540806/futbol/99e52be0-f9b4-4159-a37b-cc302b17bf71_source-aspect-ratio_default_1060681_kynmiz.webp" , view: 'hidden' , disable: false , par: 4},
    { number: 9 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540810/futbol/15313b34-b75d-45b0-958d-12daebbe9145_source-aspect-ratio_75p_1060641_z90mlf.webp" , view: 'hidden' , disable: false , par: 5},
    { number: 10 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540810/futbol/15313b34-b75d-45b0-958d-12daebbe9145_source-aspect-ratio_75p_1060641_z90mlf.webp" , view: 'hidden' , disable: false , par: 5},
    { number: 11 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540814/futbol/78074a2d-dee7-41b3-8811-43394a136ea8_source-aspect-ratio_default_1060632_pbisk0.webp" , view: 'hidden' , disable: false , par: 6},
    { number: 12 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540814/futbol/78074a2d-dee7-41b3-8811-43394a136ea8_source-aspect-ratio_default_1060632_pbisk0.webp" , view: 'hidden' , disable: false , par: 6},
    { number: 13 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540818/futbol/a2ffbdc8-389b-4aee-998e-52617060e08e_source-aspect-ratio_default_1060628_ynzdj4.webp" , view: 'hidden' , disable: false , par: 7},
    { number: 14 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540818/futbol/a2ffbdc8-389b-4aee-998e-52617060e08e_source-aspect-ratio_default_1060628_ynzdj4.webp" , view: 'hidden' , disable: false , par: 7},
    { number: 15 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540822/futbol/a125eabb-2fb6-4042-87a6-b4012188a4b6_source-aspect-ratio_default_1060669_owj68b.webp" , view: 'hidden' , disable: false , par: 8},
    { number: 16 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540822/futbol/a125eabb-2fb6-4042-87a6-b4012188a4b6_source-aspect-ratio_default_1060669_owj68b.webp" , view: 'hidden' , disable: false , par: 8},
    { number: 17 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540830/futbol/cd95dca7-5c39-4975-b835-e575cea558d7_source-aspect-ratio_default_1060630_mmqrxj.webp" , view: 'hidden' , disable: false , par: 9},
    { number: 18 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540830/futbol/cd95dca7-5c39-4975-b835-e575cea558d7_source-aspect-ratio_default_1060630_mmqrxj.webp" , view: 'hidden' , disable: false , par: 9},
    { number: 19 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540827/futbol/e5b99019-7ec4-4e6b-94b3-fac985ac931c_source-aspect-ratio_default_1060685_hxnhjv.webp" , view: 'hidden' , disable: false , par:10},
    { number: 20 , image: "https://res.cloudinary.com/dvbb6loxq/image/upload/v1703540827/futbol/e5b99019-7ec4-4e6b-94b3-fac985ac931c_source-aspect-ratio_default_1060685_hxnhjv.webp" , view: 'hidden' , disable: false , par:10},

]


const stumble = [
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809288/stumble/44a24858c887971dc41e011946d623bc_kudqja.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809288/stumble/44a24858c887971dc41e011946d623bc_kudqja.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809288/stumble/dolly_zlxkxy.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809288/stumble/dolly_zlxkxy.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809288/stumble/twister_xwlygy.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809288/stumble/twister_xwlygy.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809287/stumble/ccde6cb50ef45fd2f23f909b1a9d0209_ykywxs.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809287/stumble/ccde6cb50ef45fd2f23f909b1a9d0209_ykywxs.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809287/stumble/Rain_dllksg.webp',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809287/stumble/Rain_dllksg.webp',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809286/stumble/pessi_gqtji6.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809286/stumble/pessi_gqtji6.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703891586/stumble/stumble-guys-skins-1_z6t8da-banana_ylp7wx.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703891586/stumble/stumble-guys-skins-1_z6t8da-banana_ylp7wx.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809286/stumble/rabbit_vxzzjl.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809286/stumble/rabbit_vxzzjl.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809285/stumble/dinamitron_pbzrwo.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703809285/stumble/dinamitron_pbzrwo.jpg',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703891440/stumble/Infreno_dragon_l7gx6f-dragon_yqcnwj.webp',
    'https://res.cloudinary.com/dvbb6loxq/image/upload/v1703891440/stumble/Infreno_dragon_l7gx6f-dragon_yqcnwj.webp',

]

export   {
    arrayCard,
    stumble 
}