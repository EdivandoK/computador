import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { sql } from "@vercel/postgres";


export default async function list() {
 
    const { rows }= await sql`SELECT * FROM computer`

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[50%]">Brand</TableHead>
                        <TableHead>Description</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {rows.map((computer) => (
                        <TableRow key={computer.id}>
                            <TableCell className="font-medium">{computer.brand}</TableCell>
                            <TableCell>{computer.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )

}