import AppLayout from "@/shared/layouts/AppLayout";
import Text from "@/shared/components/atoms/Text";
import BasicButton from "@/shared/components/atoms/BasicButton";

export default function CommunityPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <Text variant="h1" className="text-3xl font-bold mb-4">
            LANDAS 커뮤니티
          </Text>
          <Text variant="body1" color="muted">
            LANDAS와 함께하는 사람들의 이야기
          </Text>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }, (_, i) => (
            <article
              key={i}
              className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-gray-100 rounded-lg mb-4">
                <img
                  src="/api/placeholder/400/225"
                  alt="커뮤니티 포스트"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <Text variant="h3" className="text-lg font-semibold mb-2">
                LANDAS 스타일링 팁 {i + 1}
              </Text>

              <Text variant="body2" color="muted" className="mb-4 line-clamp-3">
                LANDAS 제품을 활용한 다양한 스타일링 방법을 소개합니다. 일상에서
                쉽게 따라할 수 있는 실용적인 팁들을 만나보세요.
              </Text>

              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>2024.01.{15 + i}</span>
                <span>조회 1,{234 + i * 10}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <BasicButton variant="outline">더 많은 게시글 보기</BasicButton>
        </div>
      </div>
    </AppLayout>
  );
}
