import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkeleton() {
  return (
    <Card>
      {/* Weicherer Übergang mit fadDuration*/}
      <Skeleton height="200px" fadeDuration={1} />
      <CardBody>
        <SkeletonText
          mt="4"
          noOfLines={3}
          spacing="4"
          fadeDuration={1.5} // Weichere
        />
      </CardBody>
    </Card>
  );
}
