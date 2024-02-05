import ListView from "./ListView"

export default ListView
export async function generateStaticParams() {
    let output = []
    for (let i = 1; i < 1000; i++) {
        output.push({list: `${i}`})
    }
    return output
}
export const dynamic = 'force-static'
export const dynamicParams = true