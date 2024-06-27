import supabase from "./supabase";

export async function getData(){
 try {
    const { data: product, error } = await supabase
    .from('product')
    .select('*')
    return product
 } catch (error) {
    console.log(error)
 }

}
