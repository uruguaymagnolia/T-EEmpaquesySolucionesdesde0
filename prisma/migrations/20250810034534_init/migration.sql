-- CreateTable
CREATE TABLE "public"."Product" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageAlt" TEXT NOT NULL,
    "dataAiHint" TEXT,
    "category" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CaseStudy" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "imageAlt" TEXT NOT NULL,
    "dataAiHint" TEXT,
    "category" TEXT NOT NULL,
    "problem" TEXT NOT NULL,
    "solution" TEXT NOT NULL,
    "results" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CaseStudy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Message" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Solution" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "detailedDescription" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "keyFeatures" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Solution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "public"."Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "public"."Product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "CaseStudy_title_key" ON "public"."CaseStudy"("title");

-- CreateIndex
CREATE UNIQUE INDEX "CaseStudy_slug_key" ON "public"."CaseStudy"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Solution_title_key" ON "public"."Solution"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Solution_slug_key" ON "public"."Solution"("slug");
