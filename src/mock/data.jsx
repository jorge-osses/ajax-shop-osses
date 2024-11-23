

const productos= [
    {
        id:'1',
        name:'Hub 2 Plus Jeweller',
        stock:10,
        price:50,
        description:'Panel de control del sistema de seguridad',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fhub_256999a1dd%401.png&1688287078',
        category:'intrusion'
    },
    {
        id:'2',
        name:'DoorProtect Jeweller',
        stock:18,
        price:150,
        description:'Detector inalámbrico de apertura con relé reed',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fdoorprotect_f565be9860%401.png&1689152842',
        category:'intrusion'
    },
    {
        id:'3',
        name:'MotionProtect Jeweller',
        stock:50,
        price:5000,
        description:'Detector IR e inalámbrico de movimiento',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fmotionprotect_7e25a60ef8%401.png&1689152842',
        category:'intrusion'
    },
    {
        id:'4',
        name:'KeyPad Plus Jeweller',
        stock:550,
        price:55000,
        description:'Teclado inalámbrico y táctil compatible con tarjetas y mandos cifrados sin contacto',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fkeypad_plus_cb76223961%401.png&1689152843',
        category:'intrusion'
    },
    {
        id:'5',
        name:'HomeSiren Jeweller',
        stock:550,
        price:55000,
        description:'Sirena inalámbrica',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fhomesiren_90d4c3023b%401.png&1689152842',
        category:'intrusion'
    },
    {
        id:'6',
        name:'StreetSiren Jeweller',
        stock:550,
        price:55000,
        description:'Sirena inalámbrica para interiores y exteriores',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fstreetsiren_ef479c2a02%401.png&1689152843',
        category:'intrusion'
    },
    {
        id:'7',
        name:'NVR (8-ch)',
        stock:5,
        price:5500,
        description:'Grabador de video en red de 8 canales',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fnvr_black_453b202dae%401.png&1696595007',
        category:'video'
    },
    {
        id:'8',
        name:'NVR (16-ch)',
        stock:25,
        price:5500,
        description:'Grabador de video en red de 16 canales',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fnvr_black_453b202dae%401.png&1696595007',
        category:'video'
    },
    {
        id:'9',
        name:'BulletCam (5 Mp/2.8 mm)',
        stock:50,
        price:500,
        description:'Cámara IP de seguridad cableada con tecnología IA, un ángulo de visión de 110°, IR, TrueWDR, micrófono y PoE/12 V. Para exteriores e interiores',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2FBullet_Cam_black_fdaf14a78b%401.png&1697096052',
        category:'video'
    },
    {
        id:'10',
        name:'BulletCam (8 Mp/2.8 mm)',
        stock:50,
        price:550,
        description:'Cámara IP de seguridad cableada con tecnología IA, un ángulo de visión de 110°, IR, TrueWDR, micrófono y PoE/12 V. Para exteriores e interiores',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2FBullet_Cam_black_fdaf14a78b%401.png&1697096052',
        category:'video'
    },
    {
        id:'11',
        name:'DomeCam Mini (5 Mp/2.8 mm)',
        stock:50,
        price:500,
        description:'Cámara IP de seguridad cableada con tecnología IA, un ángulo de visión de 110°, IR, TrueWDR, micrófono y PoE/12 V. Para exteriores e interiores',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2FDome_Cam_Mini_54a41757df%401.png&1697096385',
        category:'video'
    },
    {
        id:'12',
        name:'DomeCam Mini (8 Mp/2.8 mm)',
        stock:50,
        price:550,
        description:'Cámara IP de seguridad cableada con tecnología IA, un ángulo de visión de 110°, IR, TrueWDR, micrófono y PoE/12 V. Para exteriores e interiores',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2FDome_Cam_Mini_54a41757df%401.png&1697096385',
        category:'video'
    },
    {
        id:'13',
        name:'FireProtect 2 RB (Heat/Smoke/CO) Jeweller',
        stock:50,
        price:550,
        description:'Detector inalámbrico y combinado de calor, humo y CO con baterías reemplazables',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Ffireprotect2_smoke_028348da8d%401.png&1689152843',
        category:'incendio'
    },
    {
        id:'14',
        name:'ManualCallPoint (Red) Jeweller',
        stock:50,
        price:550,
        description:'Botón inalámbrico reajustable para la activación manual de la alarma de incendio con escenarios programables. Versión de color rojo',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fmcp_red_f3601a576f%401.png&1696343535',
        category:'incendio'
    },
    {
        id:'15',
        name:'LifeQuality Jeweller',
        stock:50,
        price:550,
        description:'Monitor inalámbrico de temperatura, humedad y CO₂',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Flifequality_9644fe6470%401.png&1689152843',
        category:'confort'
    },
    {
        id:'16',
        name:'LeaksProtect Jeweller',
        stock:50,
        price:550,
        description:'Detector inalámbrico de inundación',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Flifequality_9644fe6470%401.png&1689152843',
        category:'confort'
    },
    {
        id:'17',
        name:'Ajax WaterStop 1" (DN 25) Jeweller',
        stock:50,
        price:550,
        description:'Válvula de cierre de agua inalámbrica de control remoto',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fwaterstop_feb7973a94%401.png&1689152843',
        category:'confort'
    },
    {
        id:'18',
        name:'WallSwitch Jeweller',
        stock:50,
        price:550,
        description:'Relé de potencia para controlar la alimentación de 110/230 V~ en remoto',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Fwallswitch_6f717abe66%401.png&1689152843',
        category:'confort'
    },
    {
        id:'19',
        name:'Relay Jeweller',
        stock:50,
        price:550,
        description:'Relé inalámbrico de contacto seco',
        img:'https://ajax.systems/api/cdn-img/?img=%2Fupload%2Frelay_a81e255a8b%401.png&1689152843',
        category:'confort'
    }
]



export const getProducts = () =>{
  
    let error = false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, intente nuevamente mas tarde')
            }else{
                resolve(productos)
            
            }
        },2000)
    })
}


export const getOneProduct = (id)=>{
    let error=false
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(!error){
                let product = productos.find((item)=> item.id === id)
                resolve(product)
            }else{
                reject('No hay datos')
            }
        },1000)
    })
}