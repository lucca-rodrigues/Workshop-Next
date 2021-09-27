import { useRouter } from 'next/dist/client/router'

export default function Product() {
    const router = useRouter()
    return (
        <div>
            {router.query.slug}
        </div>
    )
}
