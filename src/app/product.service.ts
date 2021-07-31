import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
  getAddons()
  {
    return [
         new Addons("1", "Profi-Car Additive", 50, "Addons", "A 5kg weight", "https://images-na.ssl-images-amazon.com/images/I/91e89XFkCKL._AC_SL1500_.jpg"),
         new Addons("2", "8kg dumbbells", 80, "Weights", "A 8kg weight", "https://images-na.ssl-images-amazon.com/images/I/81ysScVLWfL._AC_SL1500_.jpg"),
         new Addons("3", "10kg dumbbells", 100, "Weights", "A 10kg weight", "https://images-na.ssl-images-amazon.com/images/I/91QxtmB7tEL._AC_SL1500_.jpg"),
         new Addons("4", "12kg dumbbells", 120, "Weights", "A 12kg weight", "https://images-na.ssl-images-amazon.com/images/I/71di6xw1uhL._AC_SL1500_.jpg"),
         new Addons("5", "15kg dumbbells", 150, "Weights", "A 15kg weight", "https://images-na.ssl-images-amazon.com/images/I/61fQM3z3r0L._AC_SL1000_.jpg")
    ]
  }
  getOils()
  {
    return [
       new Oils("6", "Wooden Rings", 150, "BodyweightEquipment", "Olympic Wooden Rings.", "https://images-na.ssl-images-amazon.com/images/I/71%2BYlSOIsGL._AC_SL1500_.jpg"),
       new Oils("7", "Pull up bar", 90, "BodyweightEquipment", "Pull up bar for a door.", "https://images-na.ssl-images-amazon.com/images/I/71EzizrzGYL._AC_SL1500_.jpg"),
       new Oils("8", "Parallettes", 200, "BodyweightEquipment", "Parallettes for pushing movements.", "https://images-na.ssl-images-amazon.com/images/I/61zSQePQfZL._AC_SL1500_.jpg"),
       new Oils("9", "Push up stands", 100, "BodyweightEquipment", "Push up stands for functional push up exercises", "https://images-na.ssl-images-amazon.com/images/I/61H0NmTLOWL._AC_SL1500_.jpg"),
       new Oils("10", "Resistance Bands", 40, "BodyweightEquipment", "Resistance Bands for Workout Body Stretching, Powerlifting, Resistance Training", "https://images-na.ssl-images-amazon.com/images/I/71VnlhCil3L._AC_SL1500_.jpg")
    ]
  }
  getTires()
  {
    return [
      new Tires("11","GOODYEAR Tire",250,"Tires","Premium Quality Tire made in Israel!","https://static.wixstatic.com/media/2cd43b_8c0bc0e07d0a4eaa8a68bc1c3c2d68b0~mv2.png/v1/fill/w_320,h_320,fp_0.50_0.50/2cd43b_8c0bc0e07d0a4eaa8a68bc1c3c2d68b0~mv2.png"),
      new Tires("12","Bridgestone Tire",300,"Tires","Premium Quality Tire made in Israel!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpA9c9CUodHI9I9m_nQ8LvsyDPoegFtUo-g&usqp=CAU"),
      new Tires("13","Michelin Tire",200,"Tires","Premium Quality Tire made in France!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb01ChmmqYw-X1aEIlmKkn1MjTBTUtx8e_ujmfWVAHTTimONkTWhEEePyME3v3v8ZMn78XyxA&usqp=CAc"),
      new Tires("14","Hankook Tire",350,"Tires","Premium Quality Tire made in Japan!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwb-gv4_MFgiuyb3SkQ-U6FMS6e3HQYOyQGvOM8CkpDxuI70XChFyxIa9_vOfzcrEMXOtVhiFW&usqp=CAc"),
      new Tires("15","Continental Tire",400,"Tires","Premium Quality Tire made in germany!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_gcPNUFI5KiYHy9ArLzrdxvyTUkU4UA4uZNYXCVRfAP7Org6zzcWqDzy92GIiTXcAObD28jK&usqp=CAc"),
    ]
  }
  getSportWatch()
  {
    return [
      new Batterys("50","AAA Battery",550,"Batterys","Premium Quality Car Battery made in Israel!","https://www.aaa.com/AAA/common/AAR/images/battery-check-thumb.png"),
      new Batterys("51","Palma Battery",300,"Batterys","Premium Quality Car Battery made in Spain!","http://sc04.alicdn.com/kf/HTB1YmVjamcqBKNjSZFg760_kXXaJ.png"),
      new Batterys("52","Schnapp Battery",600,"Batterys","Premium Quality Car Battery made in Israel!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXwyq4h3HnH5uZwVoefXz7GWWpdtEJz7g-UtBQE8L-eaRBdbHuJM0GVONtDrRUzz_WuA_MV8&usqp=CAc"),
      new Batterys("53","Bosch Battery",450,"Batterys","Premium Quality Car Battery made in Italy!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2mrhEyCZ4OtlzYzFBh1o9SvYmUCJU4HGekuNjyFaAmRIr4gAUGPgkG9BQLjWv8M4W_SqmBLx&usqp=CAc"),
      new Batterys("54","Varta Battery",800,"Batterys","Premium Quality Car Battery made in germany!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRippNR-bm7r377KZT8A66cczY1OZjQ8DdTgSpkGF0sbo5gjXxaw1jDuht_OtsQx4dJtxDQ&usqp=CAc")
    ]
  }
  getAll()
  {
    return [
      new Addons("1","Profi-Car Additive",80,"Addons","Premium Additive made in gernamy!","https://www.profi-car.com/files/public/pic-60272-motoren-l-additiv-mit-mos2-d2d5e_1435.png?1588597414"),
      new Addons("2","Liqui Moly Additive",50,"Addons","Top rated Additive made in gernamy!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSD4M5DaiOYJqTpBD84N5GCgL18vJIGfOlcA&usqp=CAU"),
      new Addons("3","Prestone Additive",75,"Addons","Premium Additive made in the USA!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMmOixeMz_rnKO9yt2TL2aGILOhUJ0_6lmTg&usqp=CAU"),
      new Addons("4","4K Additive",100,"Addons","Top Rated Additive made in Israel!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYH8KTheIfPQP-rvbuhGSalflP_nzGDfTr0vXh0Wx_-jSE1Jb4zkPygg_PHEcTpw0xgkZZoQE&usqp=CAc"),
      new Addons("5","STP Additive",60,"Addons","Premium Additive made in Israel!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK3ZMSjmKjAr-vPsquiqkcG7sxABDtf2Y1sUVq_1W-pJ-FP58tOSpU_fZmnw&usqp=CAc"),
      new Oils("6","VAPRO Engine Oil",60,"Oils","Premium Engine Oil made in germany!","https://www.pngarts.com/files/3/Engine-Oil-Download-PNG-Image.png"),
      new Oils("7","Castrol Engine Oil",50,"Oils","Premium Engine Oil Made in germany!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-D_VqwsWa-ecmI_wGZuz2H6nHIMO8zGECw&usqp=CAU"),
      new Oils("8","Motul Engine Oil",45,"Oils","Premium Engine Oil made in China!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlru2ksl2MsTMwQiecVwiHXE49QeBGBqPodWlffMb5JJO7aUForC7KtSlv1QedDXoTdptUOsW-&usqp=CAc"),
      new Oils("9","ZIC Engine Oil",90,"Oils","Premium Engine Oil made in Israel!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlidITppjwSN8smK6cJRfkoNkXwvJ9C-MFyw&usqp=CAU"),
      new Oils("10","ELF Engine Oil",55,"Oils","Premium Engine Oil made in France","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwgmX_0IJjjhwmH0YpoigfbCH3fa_iTv8CCQ&usqp=CAU"),
      new Tires("11","GOODYEAR Tire",250,"Tires","Premium Quality Tire made in Israel!","https://static.wixstatic.com/media/2cd43b_8c0bc0e07d0a4eaa8a68bc1c3c2d68b0~mv2.png/v1/fill/w_320,h_320,fp_0.50_0.50/2cd43b_8c0bc0e07d0a4eaa8a68bc1c3c2d68b0~mv2.png"),
      new Tires("12","Bridgestone Tire",300,"Tires","Premium Quality Tire made in Israel!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShpA9c9CUodHI9I9m_nQ8LvsyDPoegFtUo-g&usqp=CAU"),
      new Tires("13","Michelin Tire",200,"Tires","Premium Quality Tire made in France!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb01ChmmqYw-X1aEIlmKkn1MjTBTUtx8e_ujmfWVAHTTimONkTWhEEePyME3v3v8ZMn78XyxA&usqp=CAc"),
      new Tires("14","Hankook Tire",350,"Tires","Premium Quality Tire made in Japan!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwb-gv4_MFgiuyb3SkQ-U6FMS6e3HQYOyQGvOM8CkpDxuI70XChFyxIa9_vOfzcrEMXOtVhiFW&usqp=CAc"),
      new Tires("15","Continental Tire",400,"Tires","Premium Quality Tire made in germany!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg_gcPNUFI5KiYHy9ArLzrdxvyTUkU4UA4uZNYXCVRfAP7Org6zzcWqDzy92GIiTXcAObD28jK&usqp=CAc"),
      new Batterys("16","AAA Battery",550,"Batterys","Premium Quality Car Battery made in Israel!","https://www.aaa.com/AAA/common/AAR/images/battery-check-thumb.png"),
      new Batterys("17","Palma Battery",300,"Batterys","Premium Quality Car Battery made in Spain!","http://sc04.alicdn.com/kf/HTB1YmVjamcqBKNjSZFg760_kXXaJ.png"),
      new Batterys("18","Schnapp Battery",600,"Batterys","Premium Quality Car Battery made in Israel!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXwyq4h3HnH5uZwVoefXz7GWWpdtEJz7g-UtBQE8L-eaRBdbHuJM0GVONtDrRUzz_WuA_MV8&usqp=CAc"),
      new Batterys("19","Bosch Battery",450,"Batterys","Premium Quality Car Battery made in Italy!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2mrhEyCZ4OtlzYzFBh1o9SvYmUCJU4HGekuNjyFaAmRIr4gAUGPgkG9BQLjWv8M4W_SqmBLx&usqp=CAc"),
      new Batterys("20","Varta Battery",800,"Batterys","Premium Quality Car Battery made in germany!","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRippNR-bm7r377KZT8A66cczY1OZjQ8DdTgSpkGF0sbo5gjXxaw1jDuht_OtsQx4dJtxDQ&usqp=CAc")
    ]
  }
}


class Addons {
  SerialNumber : string
  Name : string
  Price : number
  Category : string
  Description : string
  imgUrl : string
  userEmail : string
  constructor (
    SerialNumber : string,
    Name : string,
    Price : number,
    Category : string,
    Description : string,
    imgUrl : string
    )
  {
    this.SerialNumber = SerialNumber,
    this.Name = Name,
    this.Price = Price,
    this.Category = Category,
    this.Description = Description,
    this.imgUrl = imgUrl
  }
}

class Oils {
  SerialNumber : string
  Name : string
  Price : number
  Category : string
  Description : string
  imgUrl : string
  userEmail : string
  constructor (
    SerialNumber : string,
    Name : string,
    Price : number,
    Category : string,
    Description : string,
    imgUrl : string
    )
  {
    this.SerialNumber = SerialNumber,
    this.Name = Name,
    this.Price = Price,
    this.Category = Category,
    this.Description = Description,
    this.imgUrl = imgUrl
  }
}

class Tires {
  SerialNumber : string
  Name : string
  Price : number
  Category : string
  Description : string
  imgUrl : string
  userEmail : string
  constructor (
    SerialNumber : string,
    Name : string,
    Price : number,
    Category : string,
    Description : string,
    imgUrl : string
    )
  {
    this.SerialNumber = SerialNumber,
    this.Name = Name,
    this.Price = Price,
    this.Category = Category,
    this.Description = Description,
    this.imgUrl = imgUrl
  }
}

class Batterys {
  SerialNumber : string
  Name : string
  Price : number
  Category : string
  Description : string
  imgUrl : string
  userEmail : string
  constructor (
    SerialNumber : string,
    Name : string,
    Price : number,
    Category : string,
    Description : string,
    imgUrl : string
    )
  {
    this.SerialNumber = SerialNumber,
    this.Name = Name,
    this.Price = Price,
    this.Category = Category,
    this.Description = Description,
    this.imgUrl = imgUrl
  }

}
